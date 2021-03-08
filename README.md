![cody le troll](https://imgur.com/eFv8MYD.png)

# 🖌 Available themes

- `/[name]` - Cody theme
- `/testiscala/[name]` - Testiscala theme
- `/yami/[name]` - Yami theme
- `/cande/[name]` - Cande theme
- `/pascal/[name]` - Pascal theme


# ⚒ Add your own theme

Watch the french tutorial: https://www.youtube.com/watch?v=zxHaAoRrHoY

1. Fork the project (In the top-right corner of the page, click Fork)
   
![Fork image](https://docs.github.com/assets/images/help/repository/fork_button.jpg)

2. Add your theme
   1. In `static` , create a folder with your name and add a picture named avatar.png (or jpeg, jpg...). You should have something like `static/pixselve/avatar.png`.
   2. In `src/routes/`, create a folder with your name and a subfolder named `[name]`. You should have something like `src/routes/pixselve/[name]`.
   3. Copy the `index.svelte` of the cande theme (available in `src/routes/cande`) and paste it in your theme folder you just created.
   4. Find the `<RotatingAvatar/>` component and change the `imagePath` property to your image. Ignore the `static` folder, the URL should start with your name.
   5. Now edit the `backgroundColor` and `color` properties of `<Room/>` and `<TextCustom />` as you like.
   6. Finish by setting a custom text in the two `<TextCustom />` components. Note that using `{name}` will be replaced with the URL parameter. For example, for the page `codyletroll.ml/pixselve`, `{name}` will be replaced with pixselve automatically.
3. Test your code using the `Run and build the project` section
4. Make a pull request
5. Enjoy 😁

# 🖥 Run and build the project
```shell
git clone https://github.com/Pixselve/codyletroll.git
cd codyletroll
npm install
```
## Development 


```shell
npm run dev
```

Go to http://localhost:3000/ in your web browser.


## Build
```shell
npm run export
npm run start
```
