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


## npm commands
Установить модуль локально
```
npm i $name
```

Установить модуль глобально
```
npm i $name -g
```

Список модулей, установленных локально
```
npm ls
```

Список модулей, установленных глобально
```
npm ls -g
```

Список модулей, установленных локально
```
npm ls -g --depth=0
```

Удалить модуль локально
```
npm r $name
```

Удалить модуль глобально
```
npm r $name -g
```

Создать package.json пустой стандартный
```
npm init -y
```

Один раз на машине
```
1.  npm ls -g --depth=0
	(empty)

2. npm i gulp-cli -g

3. npm ls -g --depth=0
	gulp-cli@2.0.1

4. gulp
	Local gulp not found - error
```
