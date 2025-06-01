// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      dataArr = Object.keys(data);
      dataArr.map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .querySelector(`[data-node-name*="${customData}"]`)
              .setAttribute("src", data[customData]);
          } else {
            document.querySelector(`[data-node-name*="${customData}"]`).innerText = data[customData];
          }
        }

        // Check if the iteration is over
        // Run animation if so
        if ( dataArr.length === dataArr.indexOf(customData) + 1 ) {
          animationTimeline();
        } 
      });
    });
};

// Animation Timeline
const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10
    })
    .to(".one", 0.7, {
      opacity: 0,
      y: 10
    }, "+=2.5")
    .to(".two", 0.7, {
      opacity: 0,
      y: 10
    }, "-=1")
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
    })
    .to(".three", 0.7, {
      opacity: 0,
      y: 10
    }, "+=2")
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(".hbd-chatbox span", 0.5, {
      visibility: "visible"
    }, 0.05)
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(".four", 0.5, {
      scale: 0.2,
      opacity: 0,
      y: -150
    }, "+=0.7")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-5", 0.7, {
      rotationX: 15,
      rotationZ: -10,
      skewY: "-5deg",
      y: 50,
      z: 10,
      opacity: 0
    }, "+=0.5")
    .to(".idea-5 .smiley", 0.7, {
      rotation: 90,
      x: 8
    }, "+=0.4")
    .to(".idea-5", 0.7, {
      scale: 0.2,
      opacity: 0
    }, "+=2")
    .staggerFrom(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: Expo.easeOut
    }, 0.2)
    .staggerTo(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: -15,
      ease: Expo.easeOut
    }, 0.2, "+=1")
    .staggerFromTo(".baloons img", 2.5, {
      opacity: 0.9,
      y: 1400
    }, {
      opacity: 1,
      y: -1000
    }, 0.2)
    .from(".lydia-dp", 0.5, {
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45
    }, "-=2")
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0
    })
    .staggerFrom(".wish-hbd span", 0.7, {
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: "30deg",
      ease: Elastic.easeOut.config(1, 0.5)
    }, 0.1)
    .staggerFromTo(".wish-hbd span", 0.7, {
      scale: 1.4,
      rotationY: 150
    }, {
      scale: 1,
      rotationY: 0,
      color: "#ff69b4",
      ease: Expo.easeOut
    }, 0.1, "party")
    .from(".wish h5", 0.5, {
      opacity: 0,
      y: 10,
      skewX: "-15deg"
    }, "party")
    .staggerTo(".eight svg", 1.5, {
      visibility: "visible",
      opacity: 0,
      scale: 80,
      repeat: 3,
      repeatDelay: 1.4
    }, 0.3)
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(".last-smile", 0.5, {
      rotation: 90
    }, "+=1");

  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

const showMessage = (msg) => {
  const msgBox = document.getElementById("status-message");
  msgBox.innerText = msg;
};

const hideContainer = () => {
  const container = document.querySelector(".container");
  if (container) {
    container.style.display = "none";
  }
};

const runAtSpecificTime = () => {
  const startHour = 23; // 10 PM
  const startMinute = 59;
  const endHour = 23;
  const endMinute = 49;

  const now = new Date();
  const nowTime = now.getTime();

  const startTime = new Date(now);
  startTime.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date(now);
  endTime.setHours(endHour, endMinute, 0, 0);

  if (nowTime < startTime.getTime()) {
    // Countdown to start
    const diff = Math.floor((startTime.getTime() - nowTime) / 1000);
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;
    showMessage(`Please wait. You got your note on-time only so don' exit ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    hideContainer();
  } else if (nowTime >= startTime.getTime() && nowTime < endTime.getTime()) {
    // In-active time window
    document.getElementById("status-message").style.display = "none";
    fetchData(); // Run your animation setup
    clearInterval(timer); // Stop the interval
  } else {
    // After time window
    showMessage("Time expired. Please contact admin.");
    hideContainer();
    clearInterval(timer);
  }
};

const pad = (n) => (n < 10 ? "0" + n : n);

// Update every second
const timer = setInterval(runAtSpecificTime, 1000);

// Run immediately on load
runAtSpecificTime();
