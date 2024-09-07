// git add fileName or * => to add to stash area

// git reset head * => to return file from stash to working directory

// git commit -m "Message"
// git push  RemoteName branchName [Origin - main]

// git pull RemoteName

// git config --global --unset user.name

// ============ generate key insted of password ==============

// ssh-keygen -t rsa -b 4096 -c "mondyana5@gmail.com"
// cat fileName => to get file content

//ssh -T git@github.com => to authenticate

// three stages :-
//  -- working directory
//  -- staging Area
//  -- .git directory ( Repository )

// to make new repositry : git init

// to add to stage area : git add *
// to retore to working directory : git restore *
// git restore return last update whether from commit or stage area

// delete file from stage : git rm FileName

// to show edit between working and staged : git diff

// git commit -m "" => to make file unmodified

// git log => to make all commits

// git mv index.html main.html => rename file

// git commit --amend => to add

// git checkout commitId => to return to specific commit

// git remote add origin remoteLink =>  add remote ( Repositry to local )

// git push remoteName branchName => ( push to remote )

// git remote remove origin => to remove remote

// git remote -v => to know what remote you are connected

// git merge origin/main => to get changes from remote

// git fetch origin => to know changes on remote only

// git pull origin => fetch and merge direct

// git remote rename origin github

// ==== Tags

// git tag -a v1.0 -m "Version V1.0" => to make tag

// git tag => to show tags you maked

// git tag -d v1.1 => remove tag from local

// git push origin v1.1

// git push origin --delete v1.1

// git checkout {TagName} => to return last version or any version

// git branch feature => to create new branch

// git checkout feature => to switch to branch

// to merge branch with main make : git merge hotFix

// git branch -d hotFix => delete branch

// git push -d <remote_name> <branchname>

// git push --all origin => upload all thing to remote like branches

// git branch --move branch newBranch => rename branch

// git stash => if you made an edit to another branch and do you want to save edit without commit ..

// git stash apply => to get stash

// ================= Configration =====================
/*
    - git config --global user.name ""
    - git config --global user.email ""
    - git config --list

    =============== untracked file - unmodified - modified - staged  =======

    - git add *, *.js, css/  => this add to stage area

    - git rm --cached * => remove from stage area

    - git restore test.txt => remove modified 

    - git diff => difference between file in (stage) and modified

    - git commit => [stage => unmodified ] 

    - git rm {fileName} => remove file

    - git log => commit history

    - git mv {fileName} {fileName} => rename file

    - git checkout {commitId} => return to last commit

    =================== Remote ======================

    - git remote
    - git remote -v
    - git remote add {remoteName} {link}
    - git remote rename {oldName} {NewName}  
    - git remote remove {remote}

    - git fetch {remoteName}
    - git merge origin/main
    - git pull origin main





*/
