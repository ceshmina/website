# shu's website

## setup

```
docker-compose up vue
```

開発用サーバーが [localhost:8080](http://localhost:8080) で起動します。


## test build

```
docker-compose build nginx
docker-compose up nginx
```

ローカルでビルドし、Nginxによって [localhost:8081](http://localhost:8081) でホストされます。


## deploy (test)

`dev` ブランチにマージ・プッシュすると、Netlifyを利用して自動で [dev.ceshmina.com](https://dev.ceshmina.com) にデプロイされます。


## deploy

`main` ブランチにマージされると、GitHub Pagesを利用して自動で [ceshmina.com](https://ceshmina.com) にデプロイされます。
