let employees = [
  {
    id: 1,
    email: "john@gmail.com",
    password: "123",
    role: "employee",
    firstName: "John",
    taskCounts: {
      active: 1,
      newTask: 1,
      failed: 1,
      completed: 2
    },
    tasks: [
      {
        active: false,
        newTask: true,
        failed: false,
        completed: false,
        taskTitle: "Write documentation",
        taskDescription: "Create API documentation for auth module",
        taskDate: "2026-01-05",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        taskTitle: "Fix login bug",
        taskDescription: "Resolve token refresh issue",
        taskDate: "2026-01-07",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Code review",
        taskDescription: "Review PR for dashboard module",
        taskDate: "2026-01-02",
        category: "Review"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        taskTitle: "Deploy staging",
        taskDescription: "Deploy backend to staging server",
        taskDate: "2026-01-03",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Update dependencies",
        taskDescription: "Upgrade npm packages",
        taskDate: "2026-01-01",
        category: "Maintenance"
      }
    ]
  },

  {
    id: 2,
    email: "sarah.smith@company.com",
    password: "sarah@123",
    role: "employee",
    firstName: "Sarah",
    taskCounts: {
      active: 2,
      newTask: 1,
      failed: 1,
      completed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        completed: false,
        taskTitle: "Design landing page",
        taskDescription: "Create UI for marketing page",
        taskDate: "2026-01-06",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Create wireframes",
        taskDescription: "Prepare wireframes for mobile view",
        taskDate: "2026-01-02",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        taskTitle: "Accessibility audit",
        taskDescription: "Check WCAG compliance",
        taskDate: "2026-01-04",
        category: "Audit"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        taskTitle: "Update color palette",
        taskDescription: "Improve contrast for dark mode",
        taskDate: "2026-01-08",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Optimize images",
        taskDescription: "Compress assets for faster load",
        taskDate: "2026-01-01",
        category: "Performance"
      }
    ]
  },

  {
    id: 3,
    email: "rahul.verma@company.com",
    password: "rahul@123",
    role: "employee",
    firstName: "Rahul",
    taskCounts: {
      active: 2,
      newTask: 1,
      failed: 1,
      completed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        completed: false,
        taskTitle: "Implement payment API",
        taskDescription: "Integrate Stripe payments",
        taskDate: "2026-01-09",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Database migration",
        taskDescription: "Migrate users table",
        taskDate: "2026-01-03",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        taskTitle: "Load testing",
        taskDescription: "Test API under heavy load",
        taskDate: "2026-01-04",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        taskTitle: "Refactor services",
        taskDescription: "Improve service layer structure",
        taskDate: "2026-01-10",
        category: "Refactor"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Add indexes",
        taskDescription: "Optimize DB queries",
        taskDate: "2026-01-01",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    email: "emma.watson@company.com",
    password: "emma@123",
    role: "employee",
    firstName: "Emma",
    taskCounts: {
      active: 2,
      newTask: 1,
      failed: 1,
      completed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        completed: false,
        taskTitle: "Prepare test cases",
        taskDescription: "Write unit test cases",
        taskDate: "2026-01-06",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Regression testing",
        taskDescription: "Test after release",
        taskDate: "2026-01-03",
        category: "QA"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        taskTitle: "Bug verification",
        taskDescription: "Verify reported issues",
        taskDate: "2026-01-04",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        taskTitle: "Automate tests",
        taskDescription: "Setup Cypress automation",
        taskDate: "2026-01-08",
        category: "Automation"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Test reports",
        taskDescription: "Generate QA reports",
        taskDate: "2026-01-01",
        category: "Reporting"
      }
    ]
  },

  {
    id: 5,
    email: "alex.brown@company.com",
    password: "alex@123",
    role: "employee",
    firstName: "Alex",
    taskCounts: {
      active: 2,
      newTask: 1,
      failed: 1,
      completed: 2
    },
    tasks: [
      {
        active: true,
        newTask: true,
        failed: false,
        completed: false,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure GitHub actions",
        taskDate: "2026-01-07",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Server monitoring",
        taskDescription: "Setup alerts and logs",
        taskDate: "2026-01-02",
        category: "Monitoring"
      },
      {
        active: false,
        newTask: false,
        failed: true,
        completed: false,
        taskTitle: "Docker optimization",
        taskDescription: "Reduce image size",
        taskDate: "2026-01-04",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        failed: false,
        completed: false,
        taskTitle: "Security audit",
        taskDescription: "Check vulnerabilities",
        taskDate: "2026-01-09",
        category: "Security"
      },
      {
        active: false,
        newTask: false,
        failed: false,
        completed: true,
        taskTitle: "Backup setup",
        taskDescription: "Automate daily backups",
        taskDate: "2026-01-01",
        category: "Infrastructure"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "akshayjangra225@gmail.com",
    password: "akshay@123",
    role: "admin",
    firstName: "Akshay"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admins = JSON.parse(localStorage.getItem('admin'));

    return { employees, admins };
}