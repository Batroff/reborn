# reborn

# Learning rep

## git help
Когда не работает гит
```
git config --local -e

[remote "origin"]
  url = https://github.com/%USER%/%REP_NAME%.git
  fetch = +refs/heads/*:refs/remotes/origin/*

git push --set-upstream origin version-1
```