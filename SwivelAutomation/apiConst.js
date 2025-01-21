import axios from "axios";

/**
 * Function to request a token from the API
 * @param {string} url - The API endpoint URL
 * @param {string} grantType - The grant type for the authentication
 * @param {string} clientId - The client ID for the authentication
 * @param {string} clientSecret - The client secret for the authentication
 * @param {string} audience - The audience for the authentication
 * @returns {Promise<string>} - A promise that resolves to the token string
 */
export async function getToken(
  url,
  grantType,
  clientId,
  clientSecret,
  audience,
) {
  let data = JSON.stringify({
    grant_type: grantType,
    client_id: clientId,
    client_secret: clientSecret,
    audience: audience,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
}

// Function to make the POST request using the token
export async function postWithToken(token, matchId, url) {
  let data = JSON.stringify({
    matchId: matchId,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      Authorization: `Bearer ${token}`, // Use the token in the Authorization header
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log("Response:", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
}
