const giveUser = document.querySelector("#give .first-col");
const secondGive = document.querySelector("#give .second-col");
const user = document.querySelector("#user .first-col");
const secondUser = document.querySelector("#user .second-col");

function responsiveBreakpoint(width) {
  if (width.matches) {
    giveUser.innerHTML = `<img src="../images/illustration-grow-together.svg" alt="Grow Together SVG" class="grow-svg col-sm-0">`;
    secondGive.innerHTML = `
        <h2 class="order-sm-1">Grow Together</h2>
            <p class="order-sm-2">
            Generate meaningful discussions with your audience and build a strong, loyal community. 
            Think of the insightful conversations you miss out on with a feedback form. 
            </p>`;
    user.innerHTML = `<img src="../images/illustration-your-users.svg" alt="Your Users SVG" class="your-svg">`;
    secondUser.innerHTML = `
      <h2>Your Users</h2>
        <p>
            It takes no time at all to integrate Huddle with your app's authentication solution. 
            This means, once signed in to your app, your users can start chatting immediately.
        </p>
      `;
  } else {
    giveUser.innerHTML = `
      <h2 class="order-sm-1">Grow Together</h2>
      <p class="order-sm-2">
        Generate meaningful discussions with your audience and build a strong, loyal community. 
        Think of the insightful conversations you miss out on with a feedback form. 
      </p>
      `;
    secondGive.innerHTML = `
      <img src="../images/illustration-grow-together.svg" alt="Grow Together SVG" class="grow-svg col-sm-0">
      `;
    user.innerHTML = `
      <h2>Your Users</h2>
        <p>
            It takes no time at all to integrate Huddle with your app's authentication solution. 
            This means, once signed in to your app, your users can start chatting immediately.
        </p>
      `;
    secondUser.innerHTML = `<img src="../images/illustration-your-users.svg" alt="Your Users SVG" class="your-svg">`;
  }
}

const x = window.matchMedia("(max-width: 576px)");
responsiveBreakpoint(x);
x.addListener(responsiveBreakpoint);
