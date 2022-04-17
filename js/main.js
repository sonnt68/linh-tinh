function animatePath(pathname) {
  $.Velocity.animate(
    document.querySelector(pathname),
    {
      "stroke-dashoffset": 1000,
    },
    { duration: 0 }
  );
  $.Velocity.animate(
    document.querySelector(pathname),
    { "stroke-dashoffset": 0 },
    { duration: 1500, delay: 10 }
  );
}

animatePath("#LF path");
animatePath("#LF-shadow path");
animatePath("#enton path");
animatePath("#enton-shadow path");
