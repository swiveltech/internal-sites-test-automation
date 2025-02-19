$start_date = "2023-12-04"
$end_date = "2023-12-08"
$branch="main"

git checkout $branch
git pull

$start_commit = git rev-list -n1 --before $start_date $branch
$end_commit = git rev-list -n1 --before $end_date $branch

C:\Users\TaniyaSenawirathne\Downloads\cloc-1.98.exe --git --diff $start_commit $end_commit
C:\Users\TaniyaSenawirathne\Downloads\cloc-1.98.exe --git $end_commit