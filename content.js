var khaby = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSyoMmDtRc4GL793HwpN7NatFeF-Cpp6v7iIwkY09OQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcaYdHld2Yw9wkzs0zWkIYLvCYfFJ15J15UQ7dpHO6Q&s"
];

const imgs = document.getElementsByTagName("img")

for (var I = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random () * khaby.length);
    img[i].scr = khaby[randomImg];
}