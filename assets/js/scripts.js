(function(){
  function updateAccountAge(){
    var el = document.getElementById('github-account-age');
    if(!el) return;
    var creation = el.getAttribute('data-creation') || '2015-06-15';
    var date = new Date(creation);
    if(isNaN(date.getTime())){
      el.textContent = 'Created on: invalid date';
      return;
    }
    var now = new Date();
    var age = now.getFullYear() - date.getFullYear();
    var hadBirthday = (now.getMonth() > date.getMonth()) || (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());
    if(!hadBirthday) age--;
    if(age < 0) age = 0;
    var dateStr = date.toISOString().slice(0,10);
    el.textContent = `Created on: ${dateStr} • Age: ${age} year${age === 1 ? '' : 's'}`;
    var status = document.getElementById('github-status');
    if(status){
      status.textContent = `Account created on ${dateStr} and is ${age} year${age === 1 ? '' : 's'} old.`;
    }
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', updateAccountAge);
  }else{
    updateAccountAge();
  }
})();
