document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'Python' },
    { name: 'C' }
  ];

  document.getElementById('skills-list').innerHTML = skills.map(skill => `<li>${skill.name}</li>`).join('');


  const projects = [
    { name: 'busanheng 1, 2' },
    { name: '달력(년도,월,시간,일 등을 계산해 주는 웹)' },
  ];

  document.getElementById('projects-list').innerHTML = projects.map(project => `<li>${project.name}</li>`).join('');


  const upcomingProjects = [
    { name: '차량 탈취 예방을 위한 보안 프로그래밍' },
    { name: '개인 홈페이지 만들기(조금 더 부드럽고 보기 편하게)' },
    { name: 'unity나 다른 언어를 이용해여 게임 만들기' },
  ];

  document.getElementById('upcoming-projects-list').innerHTML = upcomingProjects.map(project => `<li>${project.name}</li>`).join('');


  const roles = [
    { name: '웹 개발자' },
    { name: '게임 개발자' },
    { name: '소프트웨어 엔지니어' }
  ];

  document.getElementById('desired-role').innerHTML = roles.map(role => `<li>${role.name}</li>`).join('');
});
