// db.mjs
import pg from "pg";
import allureReporter from "@wdio/allure-reporter";

const client = new pg.Client({
  user: process.env.USERDB,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORDDB,
  port: process.env.PORT,
});

await client.connect();

export const selectValues = async (tableName, condition) => {
  try {
    const query = `SELECT * FROM ${tableName} WHERE ${condition}`;
    await client.query(query);
    console.log("Values Selected successfully");
    allureReporter.addStep(
      "Values Selected successfully form table :" +
        tableName +
        "Where:" +
        condition,
      "",
      "passed",
    );
  } catch (error) {
    console.error("Error Selecting values:", error);
    allureReporter.addStep("Error Selecting values:", "", error);
  }
};

export const getColumnIdFromTable = async (
  tableName,
  condition,
  columnName,
) => {
  try {
    const query = `SELECT * FROM ${tableName} WHERE ${condition} LIMIT 1`;
    const res = await client.query(query);
    if (res.rows.length > 0) {
      allureReporter.addStep(
        "Column Value :" + res.rows[0][columnName],
        "",
        "passed",
      );
      return res.rows[0][columnName];
    } else {
      throw new Error("No value found for the given condition");
    }
  } catch (error) {
    console.error("Error retrieving value:", error);
  }
};

export const deleteValues = async (tableName, condition) => {
  try {
    const query = `DELETE FROM ${tableName} WHERE ${condition}`;
    await client.query(query);
    console.log("Values deleted successfully");
    allureReporter.addStep(
      "Values deleted successfully form table :" +
        tableName +
        "Where:" +
        condition,
      "",
      "passed",
    );
  } catch (error) {
    console.error("Error deleting values:", error);
    allureReporter.addStep("Error deleting values:", "", error);
  }
};

export const getColumnsDetailsFromTable = async (
  tableName,
  condition,
  columnNames,
) => {
  try {
    // Join the column names array into a string separated by commas
    const columns = columnNames.join(", ");

    // Construct the query to fetch the column details
    const query = `SELECT ${columns} FROM ${tableName} WHERE ${condition} LIMIT 1`;

    // Execute the query
    const res = await client.query(query);

    // Check if the query returned any results
    if (res.rows.length > 0) {
      const row = res.rows[0];

      // Log the retrieved values using allureReporter
      columnNames.forEach((columnName) => {
        allureReporter.addStep(
          `Column Value (${columnName}): ${JSON.stringify(row[columnName])}`,
          "",
          "passed",
        );
      });

      // Return the row with the column values
      return row;
    } else {
      // Throw an error if no data is found
      throw new Error("No value found for the given condition");
    }
  } catch (error) {
    // Log the error to the console
    console.error("Error retrieving value:", error);

    // Re-throw the error to handle it further up the call stack if needed
    throw error;
  }
};

export const getStaffDetailsFromTables = async (
  tableName,
  condition,
  columnNames,
) => {
  try {
    // Join the column names array into a string separated by commas
    const columns = columnNames.join(", ");

    // Construct the query to fetch the column details
    const query = `SELECT ${columns} FROM ${tableName} WHERE ${condition}`;

    // Execute the query
    const res = await client.query(query);

    // Check if the query returned any results
    if (res.rows.length > 0) {
      // Return the rows with the column values
      return res.rows;
    } else {
      // Throw an error if no data is found
      throw new Error("No value found for the given condition");
    }
  } catch (error) {
    // Log the error to the console
    console.error("Error retrieving value:", error);

    // Re-throw the error to handle it further up the call stack if needed
    throw error;
  }
};

// Remember to close the connection when done
process.on("exit", async () => {
  await client.end();
});
