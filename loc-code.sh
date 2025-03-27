#!/bin/bash

start_date="2025-02-21"
end_date="2025-03-28"
branch="main"

# Checkout the specified branch and pull the latest changes
git checkout $branch
git pull

# Get the start and end commit hashes
start_commit=$(git rev-list -n 1 --before="$start_date" "$branch")
end_commit=$(git rev-list -n 1 --before="$end_date" "$branch")

# Run cloc to analyze code changes between the start and end commits
cloc --exclude-dir=tests --exclude-lang="Bourne Shell","Markdown",SVG,YAML,CSV --git --diff "$start_commit" "$end_commit"

# Run cloc to analyze the code in the end commit
cloc --exclude-dir=tests --exclude-lang="Bourne Shell","Markdown",SVG,YAML,CSV --git "$end_commit"
