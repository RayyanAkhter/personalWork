const OPTION_SELECTED_OVERVIEW = "Overview";
const OPTION_SELECTED_SCHEDULE = "Schedule";

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
    <h1></h1>
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
const schedueHtml = (todaysTask) => ` <section id="schedule" class="schedule">
<div class="schedule-upperpart">
  <div class="part">
    <div class="day"><h1>Wednesday</h1></div>
    <div class="detailed-task">
      <div class="initialsubject">
        <input type="text" class="inputsubject" value="${todaysTask.inputsubject}" id="inputsubjects" placeholder="Input Subject">
      </div>
      <textarea name="" class="content" id="inputchapter" placeholder="Chapters to read">${todaysTask.inputchapter}</textarea>
    </div>
    <button class="add" id="adds">Add </button>
  </div>
  <div class="part os">
    <h1>Time</h1>
    <div class="timechild">
      <div class="lpart">
        <div class="chapter"><input type="text" class="title" placeholder="Chapter to read"></div>
        <div><input type="time" class="time" /></div>
      </div>
      <div class="lpart">
        <div class="chapter"><input type="text" class="title" placeholder="Input Subject"></div>
        <div>
          <input type="time" class="time" />
        </div>
      </div>
    </div>
  </div>
</div>
<div class="schedule-lowerpart">
  <div class="tasks">
    <h1>MONDAY</h1>
    <div class="subjects">
      <input class="input" id="input" type="text" />
      <div class="addimg" id="add">
        <img src="add.png" alt="" srcset="" />
      </div>
    </div>
  </div>
  <div class="tasks">
    <h1>TUESDAY</h1>
    <div>
      <input class="input" id="input" type="text" />
      <div class="addimg" id="add">
        <img src="add.png" alt="" srcset="" />
      </div>
    </div>
  </div>
  <div class="tasks">
    <h1>WEDNESDAY</h1>
    <div>
      <input class="input" id="input" type="text" />
      <div class="addimg" id="add">
        <img src="add.png" alt="" srcset="" />
      </div>
    </div>
  </div>
  <div class="tasks">
    <h1>THURSDAY</h1>
    <div>
      <input class="input" id="input" type="text" />
      <div class="addimg" id="add">
        <img src="add.png" alt="" srcset="" />
      </div>
    </div>
  </div>
  <div class="tasks">
    <h1>FRIDAY</h1>
    <div>
      <input class="input" id="input" type="text" />
      <div class="addimg" id="add">
        <img src="add.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</div>
</section>`;
let option = localStorage.getItem("option")? localStorage.getItem("option"): OPTION_SELECTED_OVERVIEW;


function initalize(element) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { fullName } = currentUser;
  element.innerText = fullName;
}

const selectContainerc = () => {
  switch (option) {
    case OPTION_SELECTED_OVERVIEW:
      localStorage.setItem("option",OPTION_SELECTED_OVERVIEW)

      return overviewHtml;

    case OPTION_SELECTED_SCHEDULE:

      localStorage.setItem("option",OPTION_SELECTED_SCHEDULE)
      const todaysTask  = localStorage.todaytask ?  JSON.parse(localStorage.todaytask) : {inputsubject:"",inputchapter:""};
      const html =  schedueHtml(todaysTask);
      return html
  }
};

const renderHtml = () => {
  const container = document.getElementById("container");
  const schedule = document.getElementById("schedule");

  const html = selectContainerc();
  container.innerHTML = html;
  if (option === OPTION_SELECTED_OVERVIEW) {
    const button = getById("logoutBtn");
    button.addEventListener("click", logout);
    const spanName = getById("name");
      initalize(spanName);
    const courses = getById("course-name");

    function toggleCourse() {
      courses.classList.toggle("open-course");
      console.log("toggleCourse");
    }

    const btn = getById("viewbtn");
    btn.addEventListener("click", toggleCourse);
  }
  if (option === OPTION_SELECTED_SCHEDULE) {
    const storedata = (e) => {
      const inputsubject = getById("inputsubjects");
      const inputchapter = getById("inputchapter");
      submitData(inputsubject.value, inputchapter.value);
    }
    const submitData = (inputsubject, inputchapter) => {
      let obj = {};
      if (inputsubject) obj.inputsubject = inputsubject;
      if (inputchapter) obj.inputchapter = inputchapter;
      localStorage.setItem("todaytask", JSON.stringify(obj));
      
    };
    const adds = getById("adds");
    adds.addEventListener("click", storedata);
  }
};


renderHtml();

document.getElementById("schedule").addEventListener("click",()=>{
  option = OPTION_SELECTED_SCHEDULE;
  renderHtml();
})

document.getElementById("overview").addEventListener("click",()=>{
  option = OPTION_SELECTED_OVERVIEW;
  renderHtml();
})





