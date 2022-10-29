const OPTION_SELECTED_OVERVIEW = "Overview";
const OPTION_SELECTED_SCHEDULE = "Schedule";
const OPTION_SELECTED_COURSE = "course";
const OPTION_SELECTED_STATTITIC = "stattitic";
const OPTION_SELECTED_SETTING = "setting";
const OPTION_SELECTED_ACCOUNT = "account";
const OPTION_SELECTED_CHANGENAME = "changeName";
const OPTION_SELECTED_CHANGEPASSWORD = "changePassword";
const OPTION_SELECTED_CHANGEEMAIL = "changeEmail";


const overviewHtml = `<section class="leftpart">
<div class="overview">
  <h1>overview</h1>
</div>
<div class="para">
  <p>Welcome back, Bella! Your progress is really good. Keep it up</p>
</div>
<div class="chart">
  <div class="average_score_container">
    <div class="average-container">
      <h1>9.6 Average Score</h1>
      <p>Better than 86% of students</p>
    </div>
  </div>
  <div class="analytic-container">
    <h1>
      Product <br />
      Analytics
    </h1>
    <div class="analytic-para">
      <p>Middle/Pro</p>
    </div>
    <div class="progress">
      <p>In Progress</p>
      <img class="bar-image" src="bar.png" alt="" srcset="" />
    </div>
  </div>
</div>
<div class="courses">
  <div class="heading">
    <h1>Featured Courses</h1>
    <button class="viewbtn" id="viewbtn">Veiw all</button>
  </div>
  <div class="course-name" id="course-name">
    <div>
      <h4>Course name</h4>
    </div>
    <div><h4>Start</h4></div>
    <div><h4>Rate</h4></div>
    <div><h4>Type</h4></div>
    <div><h4>Type</h4></div>
    <div>
      <h4>Basics of Mobile UX</h4>
      <p>Bruno Scott</p>
    </div>
    <div><h4>Feb 12</h4></div>
    <div><h4>4.6</h4></div>
    <button>UI DESIGN</button>
    <div></div>
    <div>
      <h4>Digital Design System</h4>
      <p>Bruno Scott</p>
    </div>
    <div><h4>Feb 14</h4></div>
    <div><h4>4.8</h4></div>
    <button>UI DESIGN</button>
    <div></div>
    <div>
      <h4>Basics of Mobile UX</h4>
      <p>Bruno Scott</p>
    </div>
    <div><h4>Feb 16</h4></div>
    <div><h4>4.5</h4></div>
    <button>UI DESIGN</button>
    <div></div>
    <div>
      <h4>Basics of Mobile UX</h4>
      <p>Bruno Scott</p>
    </div>
    <div><h4>Feb 18</h4></div>
    <div><h4>4.8</h4></div>
    <button>UI DESIGN</button>
    <div></div>
  </div>
</div>
</section>
<section class="rightpart">
<div class="upperpart">
  <div class="name" id="name">
    <h1> </h1>
  </div>
  <p>Middle UX/UI Designer</p>
</div>
<div class="lowerpart">
  <div class="reminder">
    <h1>Reminders</h1>
    <img src="Notif.png" alt="" srcset="">
  </div>
  <div class="lowerchild">
    <img src="volume.png" alt="" srcset="">
    <h1>workshop</h1>
  </div>
  <div class="lowerchild">
    <img src="homework.png" alt="">
    <h1>homework</h1>
  </div>
  <div class="upgrade">
    <div class="image">
      <h1>Upgrade <br> to premium</h1>               
    </div>

  </div>
</div>
</section>`;

const courseHtml = "hello world";

const stattiticHtml = `<h1>loading....</h1>`;

const settingHtml = `<section id="setting" class="setting">
<div class="setUP"> <h1>Setting</h1>
</div>
<div>
  <img src="avatar.png" alt="">
</div>
<div>

  <div class="changediv" id="account"> Account</div>
  <div class="changediv" id="changeName">Change name </div>
  <div class="changediv" id="changePassword">Change password</div>
  <div class="changediv" id="changeEmail">Change email</div>
</div>

</section>`;
const accountHtml = `  <section id="account" class="setting account">
<div class="setUP"> <h1>Account</h1>
</div>
<div>
  <img src="avatar.png" alt="">
</div>

<div>Name : <p id="currentName"></p></div>
<div>Email : <p id="currentEmail"></p></div>
<div>Password : <p id="currentPassword"></p></div>
</section>`;
const changeNameHtml = "wait to change your name";
const changePasswordHtml = "wait to change your password";
const changeEmailHtml = "wait to change your email";


renderHtml();

containersClickEventHandler("schedule", OPTION_SELECTED_SCHEDULE);
containersClickEventHandler("overview", OPTION_SELECTED_OVERVIEW);
containersClickEventHandler("course", OPTION_SELECTED_COURSE);
containersClickEventHandler("stattitic", OPTION_SELECTED_STATTITIC);
containersClickEventHandler("setting", OPTION_SELECTED_SETTING);
