## VSCode Kill starting port problem
#### windows
`taskkill /F /IM node.exe`
#### mac
`killall node`


## Shell script to convert files with CRLF to LF (Mac/Linux)
```
brew install dos2unix
find . -type f -print0 | xargs -0 dos2unix
```