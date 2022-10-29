const getById = (id) => document.getElementById(id);

if (!localStorage.getItem("currentUser")) {
  window.location.href = "/signIn.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "/signIn.html";
}

function scheduledJS() {
  const schedule = document.getElementById("schedule");
  const storedata = (e) => {
    const inputsubject = getById("inputsubjects");
    const inputchapter = getById("inputchapter");
    submitData(inputsubject.value, inputchapter.value);
  };
  const submitData = (inputsubject, inputchapter) => {
    let obj = {};
    if (inputsubject) obj.inputsubject = inputsubject;
    if (inputchapter) obj.inputchapter = inputchapter;
    localStorage.setItem("todaytask", JSON.stringify(obj));
  };
  const adds = getById("adds");
  adds.addEventListener("click", storedata);
  const removeItem = () => {
    localStorage.removeItem("todaytask");
    window.location.reload();
  };
  const dltbtn = getById("dltbtn");
  dltbtn.addEventListener("click", removeItem);

  const storetime = () => {
    const time = getById("time");
    submitTime(time.value);
  };
  const submitTime = (time) => {
    let obj = {};
    if (time) obj.time = time;
    localStorage.setItem("beforetime", JSON.stringify(obj));
  };

  const addTime = getById("addTime");
  addTime.addEventListener("click", storetime);

  const removeTime = () => {
    localStorage.removeItem("beforetime");
    container.innerHTML = updateState();
  };
  const dltTime = getById("dltTime");
  dltTime.addEventListener("click", removeTime);

  const storeSubject = () => {
    const input1 = getById("input1");
    const input2 = getById("input2");
    const input3 = getById("input3");
    const input4 = getById("input4");
    const input5 = getById("input5");
    submitSubject(
      input1.value,
      input2.value,
      input3.value,
      input4.value,
      input5.value
    );
  };
  const submitSubject = (input1, input2, input3, input4, input5) => {
    let obj = {};
    if (input1) obj.input1 = input1;
    if (input2) obj.input2 = input2;
    if (input3) obj.input3 = input3;
    if (input4) obj.input4 = input4;
    if (input5) obj.input5 = input5;
    localStorage.setItem("subject", JSON.stringify(obj));
  };
  const add1 = getById("add1");
  const add2 = getById("add2");
  const add3 = getById("add3");
  const add4 = getById("add4");
  const add5 = getById("add5");
  add1.addEventListener("click", storeSubject);
  add2.addEventListener("click", storeSubject);
  add3.addEventListener("click", storeSubject);
  add4.addEventListener("click", storeSubject);
  add5.addEventListener("click", storeSubject);
}

function overiewJS() {
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

const remove = (inputStr) => {
  let subject = JSON.parse(localStorage.getItem("subject"));
  delete subject[inputStr];
  localStorage.setItem("subject", JSON.stringify(subject));
  container.innerHTML = updateState();
};

function initalize(element) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { fullName } = currentUser;
  element.innerText = fullName;
}

function prsnlinformation(elemet ){
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { email } = currentUser;
  const { fullName } = currentUser;
  const { password} = currentUser;
}

const schedueHtml = (
  todaysTask,
  beforeTime,
  Subject
) => ` <section id="schedule" class="schedule">
<div class="schedule-upperpart">
  <div class="part">
    <div class="day"><h1>Wednesday</h1></div>
    <div class="detailed-task">
      <div class="initialsubject">
        <input type="text" class="inputsubject" value="${
          todaysTask.inputsubject
        }" id="inputsubjects" placeholder="Input Subject">
      </div>
      <textarea name="" class="content" id="inputchapter" placeholder="Chapters to read">${
        todaysTask.inputchapter
      }</textarea>
    </div>
    <div class="addDlt-container">
        <button class="add" id="adds">Add </button>
        <button class="add" id="dltbtn">Delete</button>
    </div>
  </div>
  <div class="part os">
    <h1>Time</h1>
    <div class="timechild">

      <div class="lpart">
        <div class="chapter">You have to complete task before this..</div>
        <div>
         <input type="time" value="${
           beforeTime.time
         }"  class="time" id="time"  />
        </div>
      </div>
     </div>
    <div class="addDlt-container">
        <button class="add" id="addTime">Add </button>
        <button class="add" id="dltTime">Delete</button>
    </div>
  </div>
</div>
<div class="schedule-lowerpart">
  <div class="tasks">
    <h1>MONDAY</h1>
    <div>
    <input class="input" id="input1" type="text" value="${
      Subject.input1 || ""
    }" placeholder="Enter subject" />
      <div class="btnimg">
        <img src="add.png" id="add1" alt="" srcset="" />
          <img src="delete.png" id="dlt1" alt="" srcset="" onclick="remove('input1')" />
      </div>
    </div>
  </div>
  <div class="tasks">
    <h1>TUESDAY</h1>
    <div>
      <input class="input" id="input2" type="text" value="${
        Subject.input2 || ""
      }"  placeholder="Enter subject" />
      <div class="btnimg">
        <img src="add.png" id="add2" alt="" srcset="" />
        <img src="delete.png" id="dlt2" alt="" srcset=""  onclick="remove('input2')" />    
      </div>
    </div>
  </div>
  <div class="tasks">
    <h1>WEDNESDAY</h1>
    <div>
      <input class="input" id="input3" type="text" value="${
        Subject.input3 || ""
      }"  placeholder="Enter subject" />
      <div class="btnimg">
        <img src="add.png" id="add3" alt="" srcset="" />
        <img src="delete.png" id="dlt3" alt="" srcset=""  onclick="remove('input3')" />    
      </div>
    </div>
  </div>
  <div class="tasks">
    <h1>THURSDAY</h1>
    <div>
      <input class="input" id="input4" type="text"  value="${
        Subject.input4 || ""
      }" placeholder="Enter subject" />
      <div class="btnimg">
        <img src="add.png" id="add4" alt="" srcset="" />
        <img src="delete.png" id="dlt4" alt="" srcset=""  onclick="remove('input4')" />    
    </div>
    </div>
  </div>
  <div class="tasks">
    <h1>FRIDAY</h1>
    <div>
      <input class="input" id="input5" type="text" value="${
        Subject.input5 || ""
      }"  placeholder="Enter subject" />
      <div class="btnimg">
        <img src="add.png" id="add5" alt="" srcset="" />
        <img src="delete.png" id="dlt5" alt="" srcset=""  onclick="remove('input5')" />    
      </div>
    </div>
  </div>
</div>
</section>`;

function updateState() {
  localStorage.setItem("option", OPTION_SELECTED_SCHEDULE);
  const todaysTask = localStorage.todaytask
    ? JSON.parse(localStorage.todaytask)
    : { inputsubject: "", inputchapter: "" };
  const beforeTime = localStorage.beforetime
    ? JSON.parse(localStorage.beforetime)
    : { time: "" };
  const Subject = localStorage.subject
    ? JSON.parse(localStorage.subject)
    : { input1: "", input2: "", input3: "", input4: "", input5: "" };
  const html = schedueHtml(todaysTask, beforeTime, Subject);
  return html;
}


const selectContainerc = (option) => {
  switch (option) {
    case OPTION_SELECTED_OVERVIEW:
      localStorage.setItem("option", OPTION_SELECTED_OVERVIEW);
      return overviewHtml;

    case OPTION_SELECTED_SCHEDULE:
      const html = updateState();
      return html;
    case OPTION_SELECTED_COURSE:
      localStorage.setItem("option", OPTION_SELECTED_COURSE);
      return courseHtml;

    case OPTION_SELECTED_STATTITIC:
      localStorage.setItem("option", OPTION_SELECTED_STATTITIC);
      return stattiticHtml;

    case OPTION_SELECTED_SETTING:
      localStorage.setItem("option", OPTION_SELECTED_SETTING);
      return settingHtml;
    case OPTION_SELECTED_ACCOUNT:
      localStorage.setItem("option", OPTION_SELECTED_ACCOUNT);
      return accountHtml;
    case OPTION_SELECTED_CHANGENAME:
        localStorage.setItem("option", OPTION_SELECTED_CHANGENAME);
        return changeNameHtml;
    case OPTION_SELECTED_CHANGEPASSWORD:
        localStorage.setItem("option", OPTION_SELECTED_CHANGEPASSWORD);
        return changePasswordHtml;
    case OPTION_SELECTED_CHANGEEMAIL:
        localStorage.setItem("option", OPTION_SELECTED_CHANGEEMAIL);
        return changeEmailHtml;
  }
};

const renderHtml = () => {
  let option = localStorage.getItem("option")
  ? localStorage.getItem("option")
  : OPTION_SELECTED_OVERVIEW;
  const container = document.getElementById("container");
  const html = selectContainerc(option);
  container.innerHTML = html;
  if (option === OPTION_SELECTED_OVERVIEW) {
    overiewJS();
  }
  if (option === OPTION_SELECTED_SCHEDULE) {
    scheduledJS();
  }
  if (option === OPTION_SELECTED_SETTING) {
    containersClickEventHandler("account", OPTION_SELECTED_ACCOUNT);
  }
  if (option === OPTION_SELECTED_SETTING) {
    containersClickEventHandler("changeName", OPTION_SELECTED_CHANGENAME);
  }
  if (option === OPTION_SELECTED_SETTING) {
    containersClickEventHandler("changePassword", OPTION_SELECTED_CHANGEPASSWORD);
  }
  if (option === OPTION_SELECTED_SETTING) {
    containersClickEventHandler("changeEmail", OPTION_SELECTED_CHANGEEMAIL);
  }

};

function selectRenderHtml(value) {
  localStorage.setItem("option",value)
  renderHtml();
}

function containersClickEventHandler(id, value) {
  document
    .getElementById(id)
    .addEventListener("click", () => selectRenderHtml(value));
}
