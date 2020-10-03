import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Login from "./screens/LoginScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import LibraryScreen from "./screens/LibraryScreen.js";
import AppView from "./screens/AppView.js";
import Settings from "./screens/settings.js";
import ReviewScreen from "./screens/ReviewScreen.js";
import DonateScreen from "./screens/donate.js";
import GC from "./screens/Gc.js";
import MC from "./screens/Mc.js";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const StackLibrary = createStackNavigator();
const StackSettings = createStackNavigator();
appStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={retrieve} />
      <Stack.Screen name="AppView" component={retrieve3} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
    </Stack.Navigator>
  );
};

appStack2 = () => (
  <StackLibrary.Navigator>
    <StackLibrary.Screen name="Library" component={retrieve2} />
    <StackLibrary.Screen name="AppView" component={retrieve3} />
    <StackLibrary.Screen name="ReviewScreen" component={ReviewScreen} />
  </StackLibrary.Navigator>
);

appStack3 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={appStack} />
      <Tab.Screen name="Libraries" children={appStack2} />
      <Tab.Screen name="Settings" component={appStack4} />
    </Tab.Navigator>
  );
};

appStack4 = () => {
  return (
    <StackSettings.Navigator>
      <StackSettings.Screen name="Settings" component={Settings} />
      <StackSettings.Screen name="Donate" component={DonateScreen} />
      <StackSettings.Screen name="GC" component={GC} />
      <StackSettings.Screen name="MC" component={MC} />
    </StackSettings.Navigator>
  );
};
App = () => {
  const [apps, setApps] = useState([
    {
      id: "1",
      name: "Amazon",
      uri: "https://purepng.com/public/uploads/medium/amazon-logo-rgp.png",
      link: "https://play.google.com/store/search?q=Amazon&c=apps",
      check: false,
      reviewlist: [
        "A very Good app with a lot of Functionality",
        "Great Things Discovered",
      ],
      rating: [5, 5],
    },
    {
      id: "2",
      name: "Expo",
      uri:
        "data:image/png;base64,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",
      check: false,
      link: "https://play.google.com/store/apps/details?id=host.exp.exponent",
      reviewlist: [
        "A good way to simulate while coding ",
        "A very good thing to do with Mobile Computing",
      ],
      rating: [5, 5],
    },
    {
      id: "3",
      name: "Facebook",
      uri: "https://img.icons8.com/plasticine/2x/facebook-new.png",
      link: "https://play.google.com/store/apps/details?id=com.facebook.katana",
      check: false,
      reviewlist: [
        "A social networking app that helped me with the connection with others ",
        " Hi, my fellow friends I recommend this app to you.",
      ],
      rating: [5, 5],
    },
    {
      id: "4",
      name: "Google",
      uri: "https://pngimg.com/uploads/google/google_PNG19642.png",
      link: "https://play.google.com/store/apps/details?id=com.android.chrome",
      check: false,
      reviewlist: [
        "A way to search important things in the browser with efficiency ",
        "A very good browser that has a lot of security",
      ],
      rating: [5, 5],
    },
    {
      id: "5",
      name: "HoneyBook",
      uri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMzsDVFVubf7VxBAd4-sM59NuG1oeiSRhHLA&usqp=CAU",
      link:
        "https://play.google.com/store/apps/details?id=com.BlackAnt.honeybeecultivation",
      check: false,
      reviewlist: [
        "A good Book. Mostly recommended. ",
        "an Awesome book, mostly recommended",
      ],
      rating: [5, 5],
    },
    {
      id: "6",
      name: "Instagram",
      uri:
        "https://www.freepnglogos.com/uploads/pics-photos-instagram-logo-png-4.png",
      link:
        "https://play.google.com/store/apps/details?id=com.instagram.android",
      check: false,
      reviewlist: [
        "A great things to store my images and show it to the world ",
        " Best app to keep up with my fans.",
      ],
      rating: [5, 5],
    },
    {
      id: "7",
      name: "Kindle",
      uri:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAABwCAMAAAC+RlCAAAAAxlBMVEX29vb9mAD39/f7lwD29vj19vj3lQD39/X59/L/8ND/lwD29vn/3qb99+3/7sT/9eH99+f+4rv0vnDvq0jyxXvvoS3ykADwlADrmiH2yn7+8dz99+z/57r515/1lgD2pi73xoD+79P2qjvsumj5z43ztWD/78X/8s3rozj0wHXxslr93qzwmx396L3ymRL1rkXpxYvtz6Dmv3/ltGr958j515v1tFz/3Yn15tHxzp72wHT5tVL3tUb0vWT40pD/7rv/4Z/np09kxFhmAAAOBUlEQVR4nO2di3+iuBbHgUASaBGqZX2gtFgdHyDu3am9u9Nt587//09d8gABsaJ1BvhMfjvTHW14mC/n5HFOoqQItVqSIgm1WAJgyyUAtlwCYMslALZcAmDLJQC2XAJgyyUAtlwCYMslALZcAmDLJQC2XAJgyyUAtlwCYMvVBIDoSmV+6g00VU0AWEU/uY7R/h/qz73StdUEgA2osszz0YC7OUe1A9SI6ru8Wrg+e13jDZ2rmgFi1yJyT3pIVuDq1oFtdn1MTk3Ojulr22xNu1gvQM3684noP249z7w6+otd36Sv4ufk76/k9dfn1jjSmgHqPQgAgF2r4gFXtgu148TXN+C9y4Hhuz/i+wH927YYYP0AgSzLRtc6ZYEIY3xlFxozuuk48eVleG/Hp0aIAiRvCICVhBAHCDjA43ywH0zGFpau6WlzADX2hgB4ngoAj0l1Z07fi3pjfOVuTB6gJACeq0oAkWTuImDIBlx2rlyvGRfKJACep4oW6E9JqZjgyrzu9WOAQAD8hKoBRHd9mcroja5bscICPykOEH4MEAdeAtAXAAtqBMATFqg8RwwgmNsCYEFtAKjaXWgQA4wm+LrXFwA/qYqdGKT3+hDA6LHqhE1ViU7MJ1URoIT82Utvfmt/WOgCCQv8pKoCpGED98r+U7pwIN+see5mAHw6CbCi1BO1W+AiLPCTqm6BpwMR6IJYhQD4SZ0DkKrUwNib1bJZUOZnthOzDyedAqg2KwmqLQBVhI77x7NbJcQD8Oo5FnjKPdejtgCsoLPrV8kAzFogEC60qq7cialsIwgpCnGF2gVtIGpW5mEzAH7GAllVKwhb+mKx0G30wQdCpKA5Wnz5Pt58WYxcdCZAVTEt/cvCtzFqSuJaMwFim8ni4SNkF5LXaDaZnQwMNWQvbu/Xy8FgsHx7X5hHK1fD1pfdqucMwjAcOL3u7L9h9ZkYTbG/vK9elvGB88fbhd0Mhk0EqLlBd07119+sIt0VebX+B/N6Rf7X+HX3jhLUsB98c/rAYILO7EjMQsX+ZD7wDEM26NRqXNaDlS0QWUGXHEwF+s63sV1/TnTjANJ6c28HrJoGO5u1N9YDxdONTZCWQJ2BAQxvSAw0prImAXvZkHnMwlvrZZM2MYEffSMplVUVgLjzLYS5g8LV4vpzQ2erYQBJF4HwoyCcwOVvxgCJyXTNpMnrkCLwxSVU1n3AooVy8j+4PrBBVcP6KgIl9CoBVM1gCw8O6wWnM5J/tpoFkJibPRnQeobO2E3KZQBKhCGxQEMG05Gpr0Jg7OklVftoF3uK5rgHAS9nAAAh2NMsAjRyAEl31QxCXjx7KBgEV87xOF+1A5QLbaA7CVmlOhsznfagAIkL5YUQtUA57NxOvcRxQs/zYAIlGhe8Gw6cxIKAFz1Mt6/baRhBkitVwQLNgBkvgJGzfX3dhh69HxmExev8ctUOMGeBSLLfOb9lB3N/iRhAI7VAibtQGf7rAU6vv30bvg9fIshMEbzl+7U4GCRW09/Oxr7t2q6lj4csW+oEQA1v2NGg/zYekd6x/j5ljwNY6j+5ik6pYQDdGXvU4WvaD0Go6EJ5JyZGyvF509nCck1s2os3j/nI6C77uRROgHRwxpZJx+KKhLH5vco4EPlryGiNXdoPRsj0VyzRCnavHqQ8T40CiOwh5zf3CT+UjBoSgGmjyCyQt2DbiU86E+QU2Foxnwpn7v4yKL4M7X7C6cTCmcAFncwGJwBq7oyeE655r5MytB7ZhaK7ep1oMwA+WTfkpfXIHmuvq+dzsD8ASIZ9JpsZI1L0NfN2a589E+SHzSsbvmzMXON2IpzEBi2IhSyM7YbdFA9oWG/sWbvKPO7lagrAuBKUEefXX5FRQBnArAslx8Vl55t8Vx4HNIUNOB0tOUXcAHJ+OmafNjn3TelkdgYguUf3kTasUZDO8ND3lc6SdIDA4K7W8XxzAKLRqk/NKlpZxXs6AjDuBc5GODUAlYDRfHbKcJyexHph8y3LBdLyo4sqAV1tsSTNLXxL74rNZqvujJ12d3zq7heoMQCR3+WNyuMBv6MWGN4eJIoSg6GnCchZ6KLb24jSDoOD1qoKQLTzyPCxf3C0wlwrmI9uLq6Az6sZALuW4rP+oxy+kylG+ojvyx0BCIfmYd3xPG4vSBjYL7Sx6j+aB5+1SlqhPafPyvQgq1+znmDirOtTUwD6c1rtgEx/HuoIQG9oHobm0IY2gh5LAo77IRs6sgS9khFbFQtcsCKr/H2R35sTyB4VAfDt+5z6KeAc+kSi4xaYFkkPU+5C1jRxl2cOyaNh9GcZF3jYieFvFADGrZ1COkWG7O2yk2Y8C+eORDZkGNRZhc0AOP2XdvSAc2Ru8TTAZMSIJOX5gVrcjPc4rS09tnRt4UkLVCXEuireONtZirmS77zRHSAAslEbnZCGyzEDcrBPSwULTM1K0en8GJjxme9napBGl5q2enYv1OzSO/Q2JjYxNrPCC/psCIA8RgCmG95sHagSwOScPqvW2GWSDIq4D0qRzMomTE53YlRrTW8ODneTAw0fGMDfvg1kAq+6dORuzgF4wwaCkFtg3ASSYG84LmtbTwNEeo/N+UAIPY/8geQnE5vQFgATeW989dFBdtk5ANVRDqBLhyeGsyj7nBUAdhwGsCySLwuALB4o87BCf+iqpYnP5wFcc4C0Xm3Wh+n5Zdc/3QaijXOUXArwt28DwfaVz8LsLu2F7lUAyA99GZWljVawwHEybQ5IHB6AJIQls7B83PuCQZ15os0A+PS9xyJuRyLclwB8NLOHvpSuDa1ggeMBDUSBKBwMBmHI/pB/81fxD2GB4MningrQQPyBLgAIHk0lc2hvVHb9Si6UWqD3v/FRlZ76V6kZALsWDngqRU8vSV2/DKCaOXSpX9oLXbIQia9ox/T5eviEmgHwybpxZ2wrCvhWkpZ7GUDWiWFpL07pJk8VJrNHdBhheOWbRNWeVdgYgJqUJEN497y5ylTORQBdOjnjsmBgVLra4SMXygMi9pzNxBzGopqhZgAkaQmKP2cdmejdLZa7DCC1QJM9F7RPc0EvVDKHLGyb3JTaqLVJTQFIUyrQc49NaSeRV5Qa4UW9UFrjKt7RPI14HFE+mX0KoHLbZ56d3mIDfGZBzQBIE4PUNP3S2RT2lbwMILVAzKJLRhhcEo2Ib/ELS6h5uPIuX9dSgwCSBGjytBsk+JqvrUvbQBLQY+EkGXYPHHO1gK7F0ty822ZuhF47QDl1obHR2TOeLjvPP+9FgFJVgFIS0JXlsjmCyjkxNE+xCavJDlQ7wH0bSGZBLZLZZBiy9410RVM3esFkdgxQYbmBfCgOS1rBKjkxNCuNmOCEX0x0YvY6WF6m+KzXL0ckszodTV8GkL92k3S34YETrbRXGk8fBMsNe1MA3KtkfWCHNVkg3KWLIy4LJ3GAahpQiE9pJh+WQ1DzAFEOYAIKdZY831/PHtsQNQugSteBMYKDzb7NsmiaS8WAbmqBrF2NTeixz9OAb1MbZMP0oxa4y62NeOdTDHNdKU6+oJ+wg9tZahxAssM5M5jlfqH0eSkVWYC0NF9dFBN8txRNSjJ+yzoxYwowCWXwNVMjfrzX25hasuRCkTRNMTuru3rXeDYLIFXcFWVLifYLpS/JidkDVBInKBv9+dhWkvnnGMD3Bw4wvzbCWC6wpqQrZsjyFmbDgxnZneIm/k9VFGyNHwd/rEdicUsGIKkyqwtpBgPsjvgakwsAMgtMuIwdnroBB6vAtzFGCJnWIniJ8haInhlA7+V2HNyl3VYzCHlY11s+BhvfsqzRczCbD6ABonpnSZsB8Cm3S4Wi0/BuPJiY8Yq9GCCXgoMlX2ENYPi6mgSx3rs9thrR2AOULL4WHkRhGE7S07u7/Rr5yFnPu0/rZcQWdBtd67eOyMsFF6oSl7dhLg9EOzebF3EA8L4EoJK60Ownw5tkMwvCwPOiyIPpivoMQHeeLqUHcLhPp3d3yRp7QwYGAPFf/hL+8H/rpKa8C+U+y+RL2o1BgM91oQr7mhA+Dkyjw8ifOcmGCAWB/p/0PArtBO/3IgHrTB6GGfQ8cHgsjOab39uF8q+f4/09/jWM8QMfka+BA2RNn0QskBVLeClkjXxsSGUWqPlLWpilVOy9GzL1YeiBIgSyP8LEZivfyV93mFiqAZyRxhOhCFr/PoKynN0pyIiPDezfeon16OuU6E/iq3KpFPb7lOkvslmTPWfFeF2pkv6DvN6WfQ2BNnqihf8xi59MMf3d20PsOslOL8CgqbrR9n6cQ4Dsd4f8Pv5leJ/bTAu7nW643yMGxAXe6sZXN0AJ2yMiuko6N0JG7ojJphnyvBiZV2HHWfyNsnNa+3MWhEzbv9vdP81fe6/r+dP9LHgeubgwNnf13dP6dX0/ebZR7jcqtvXJ2zQkGdpRuO3GBQi+emdmav8S5A9iNOVZKCizy8TZUiSETduiiC3bdpPd8/aVQJyla5PfmiXGFY89/Oe7uAt79+zb5sFjV4PqBJjbMyAvNpxIXh0+42r528dPmD/6hnxZddy8Hek+0u0RNKV05XQ8gCffJor3Dv93t0Cuik8yLaYWXlc/WaWrpIU+2GL9oxK/VLUDPF6l9VfOsXtApwr8QtUO8Liutkf9JeKhv7JrIQnlmsx6VTfAcysA/VqAR35Vd88lo7oBHlOug4fOdlonC6kl/yq9j49YNYFjUwEKVZQA2HIJgC2XANhyCYAtlwDYcgmALZcA2HIJgC2XANhyCYAtlwDYcgmALZcA2HIJgC1XDFCoxZKU/wOYMjubaaDzNgAAAABJRU5ErkJggg==",
      link: "https://play.google.com/store/apps/details?id=com.amazon.kindle",
      check: false,
      reviewlist: ["So many good books to find ", "Things are good"],
      rating: [5, 5],
    },
    {
      id: "8",
      name: "LED Torch",
      uri: "https://www.iconfinder.com/data/icons/tourism-line-2/48/67-512.png",
      link:
        "https://play.google.com/store/apps/details?id=com.ashapps.led.torch",
      check: false,
      reviewlist: [
        "I used this on my phone and it works, Now I have a virtual Flashlight.",
        " Helps me when I have no more flashlight battery for my things.",
      ],
      rating: [5, 5],
    },
    {
      id: "9",
      name: "Magento",
      uri:
        "https://banner2.cleanpng.com/20180809/pxw/kisspng-logo-e-commerce-design-brand-magento-lnea-de-tiempo-de-la-evolucin-del-comercio-ele-5b6cd9376465e2.3505243415338601514112.jpg",
      link: "https://play.google.com/store/apps/details?id=com.magapp.main",
      check: false,
      reviewlist: ["Hello ", " Hi"],
      rating: [5, 5],
    },
    {
      id: "10",
      name: "NASA",
      uri:
        "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png",
      check: false,
      link: "https://play.google.com/store/apps/details?id=gov.nasa",
      reviewlist: [
        "I love NASA, it has many things that I could find, it is so very good.",
        "Great way to do things personally with space.",
      ],
      rating: [5, 5],
    },
    {
      id: "11",
      name: "Opera",
      uri: "https://img.icons8.com/dusk/2x/opera.png",
      link: "https://play.google.com/store/apps/details?id=com.opera.browser",
      check: false,
      reviewlist: [
        "Another optimization of browser which I recommend on low end memory usage ",
        " Hi, this is a great app to think about, please consider using this.",
      ],
      rating: [5, 5],
    },
    {
      id: "12",
      name: "Python",
      uri:
        "https://www.freepngimg.com/thumb/python_logo/5-2-python-logo-png-image-thumb.png",
      link: "https://play.google.com/store/apps/details?id=ru.iiec.pydroid3",
      check: false,
      reviewlist: [
        "A good IDE where I can code using my cellphone.",
        " This is a good way to use IDE because I don't have a computer",
      ],
      rating: [5, 5],
    },
  ]);

  const update = (item, i) => {
    setApps([]);
    let tempArr = [];
    tempArr = [...apps];
    tempArr[i] = item;

    setApps(tempArr);
  };

  retrieve = () => <HomeScreen apps1={apps} />;
  retrieve2 = () => <LibraryScreen apps1={apps} />;
  retrieve3 = () => <AppView apps1={apps} update={update} />;

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Log" component={Login} />
        <Stack.Screen name="Home" children={appStack3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
