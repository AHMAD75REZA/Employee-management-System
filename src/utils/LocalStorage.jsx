
     const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Complete the project documentation.",
            "date": "2024-11-01",
            "category": "Documentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Review codebase for potential bugs.",
            "date": "2024-11-02",
            "category": "Code Review",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Prepare presentation slides for the client meeting.",
            "date": "2024-11-05",
            "category": "Presentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Organize team brainstorming session.",
            "date": "2024-11-01",
            "category": "Meetings",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Update client on project progress.",
            "date": "2024-11-02",
            "category": "Client Communication",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Draft the initial version of the project proposal.",
            "date": "2024-11-05",
            "category": "Proposal",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Research competitor products.",
            "date": "2024-11-01",
            "category": "Research",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Update product documentation.",
            "date": "2024-11-02",
            "category": "Documentation",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Conduct user feedback session.",
            "date": "2024-11-04",
            "category": "Feedback",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Design initial project wireframe.",
            "date": "2024-11-01",
            "category": "Design",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Collaborate with team to finalize design.",
            "date": "2024-11-03",
            "category": "Collaboration",
            "active": false,
            "newTask": true,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Refine project logo based on feedback.",
            "date": "2024-11-05",
            "category": "Design",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Task 1",
            "description": "Test the application for bugs.",
            "date": "2024-11-01",
            "category": "Testing",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Task 2",
            "description": "Document test cases.",
            "date": "2024-11-03",
            "category": "Documentation",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Task 3",
            "description": "Create test scripts for automation.",
            "date": "2024-11-04",
            "category": "Automation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]
  
  
     const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const SetLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
    
  }

  

  export const getLocalStorage = () =>{
   const employees = JSON.parse( localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   console.log(employees, admin);
   

  }