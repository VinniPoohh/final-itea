// 1. Принять от пользователя имена людей для набора в команду. Имена принять и сохранить в новом массиве. Количество имён должно соответсвовать количеству должностей. Массив с должностями - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'].
// 2. Создать объект team в котором будут храниться новые объекты-сотрудники с параметрами name и position, данные для этих свойств добавляем из массивов.
// 3. Добавить сотрудникам зарплаты (свойство salary) при помощи метода Math.random(), который будет выдавать произвольное число в промежутке между N1 и N2 исходя из принципа:
// если в должности есть слово "junior" сумма будет от 500 до 1000;
// если в должности есть слово "middle" сумма будет от 1500 до 2000;
// если в должности есть слово "senior" сумма будет от 2500 до 3000;
// для всех остальных - от 4000 до 4500; Для определения того есть ли слово в имени должности используйте метод str.indexOf('часть строки для поиска'). Например:
//    var name = 'Junior developer';
//    name.indexOf('Junior'); 
//    //в данном случае вернет 0, если такая строка отсутсвует вернет -1. 
//    //Регистр имеет значение, по этому строка "junior" вернет -1
// 4. Добавить каждому сотруднику метод tellAboutYourSelf(), который будет сообщать информацию о пользователе (например "Меня зовут John и я - Project manager. Я зарабатываю 4863$.").
// 5. Добавить объекту team метод showTeam(), который будет выводить информацию о всех сотрудниках в консоль в формате: "John - Project manager. Зарплата - 4863$."*
// Для удобства создайте по порядку все необходимые функции и в конце сделать вызов этих функций в логическом порядке. Например:

// getNames();
// createTeam();
// setSalary();
// создание цикла для установки метода tellAboutYourSelf();
// создание team.showTeam = function() {...};
// вызов метода showTeam();




// Пункт №1

// 1. Принять от пользователя имена людей для набора в команду. 
// Имена принять и сохранить в новом массиве.Количество имён должно соответсвовать количеству должностей.
// Массив с должностями - ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'].



var manyPerson = new Array(); 
     
    var person = new Object(); 
     
    for ( var i = 0;  i < 7; i++) { 
        person = { 
            name: a = prompt("Введите имя сотрудника:"), 
            sName: b = prompt("Введите фамилию работника:"),
            occupation: d = prompt("Введите должность работника:"), 
            show: function () { 
                var message = confirm("Информация про работника: \n имя: " + person.name + "\n фамилия: " + person.sName + "\n должность: " + person.occupation)  
                return message; } 
                 
            } 
            manyPerson.push(person); 
            console.log(person.show()); 
            console.dir(person); 
        }; 
         
            console.dir(manyPerson); 

console.dir(manyPerson);
    
// // Пункт №2

// // 2. Создать объект team в котором будут храниться новые объекты-сотрудники с параметрами name и position, данные для этих свойств добавляем из массивов.

        var position = [ 
    'Junior developer',  
    'Middle developer',  
    'Senior developer',  
    'Junior QA',  
    'Middle QA',  
    'Senior QA',  
    'Project manager' 
   ]; 
   var participants = new Array(); 
   var team = { 
        team: {}, 
        showTeam: function () { 
          for (var i in this.team) { 
      const person = this.team[i]; 
      console.log(`${person.name} - ${person.position}. Заработная плата ${person.salary}$.`); 
            this.team[i].tellAboutYourSelf(); 
          } 
        }, 
      }; 
 
   function getNames() { 
    for (let i = 0; i < position.length; i++) { 
     var name = prompt("Введите имя работника на должность " + position[i]); 
     participants.push(name); 
    } 
 
    createTeam(position, participants); 
   } 
 
   function setSalary(position) { 
    if (position.indexOf('Junior') != -1) { 
     return Math.floor(Math.random() * (1000 - 500 + 1)) + 500; 
    } else if (position.indexOf('Middle') != -1) { 
     return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500; 
    } else if (position.indexOf('Senior') != -1) { 
     return Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500; 
    } else { 
     return Math.floor(Math.random() * (4500 - 4000 + 1)) + 4000; 
    } 
   } 
 
   function createTeam(position, participants) { 
        for (let i = 0; i < position.length; i++) { 
          const person = { 
            name: participants[i], 
            position: position[i], 
            salary: setSalary(position[i]), 
            tellAboutYourSelf: function () { 
              console.log(`Привет! мое имя ${this.name} і я - ${this.position} . Я зарабатываю ${this.salary}$.`); 
       console.log('######################################') 
            }, 
          }; 
          team.team[`Persone ${i + 1}`] = person; 
        } 
        team.showTeam(); 
      } 
 
   getNames();