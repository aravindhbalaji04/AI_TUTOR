// script.js
document.addEventListener('DOMContentLoaded', () => {

    // Theme toggle functionality
    const themeSwitch = document.getElementById('themeSwitch');
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.value === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login functionality is not implemented yet.');
    });

    document.getElementById('gmailLoginBtn').addEventListener('click', function() {
        alert('Gmail login functionality is not implemented yet.');
    });

    const studentData = {
        classX: [
            { name: "Alice", performance: "A" },
            { name: "Bob", performance: "B" },
            { name: "Charlie", performance: "C" },
        ],
        classY: [
            { name: "David", performance: "B+" },
            { name: "Eva", performance: "A-" },
            { name: "Frank", performance: "B" },
        ],
        classZ: [
            { name: "Grace", performance: "A" },
            { name: "Hank", performance: "B+" },
            { name: "Ivy", performance: "C+" },
        ],
        classA: [
            { name: "Jack", performance: "B" },
            { name: "Kathy", performance: "A+" },
            { name: "Leo", performance: "B-" },
        ],
        classB: [
            { name: "Mona", performance: "C+" },
            { name: "Nina", performance: "B+" },
            { name: "Oscar", performance: "A-" },
        ],
    };

    document.querySelectorAll('.class-btn').forEach(button => {
        button.addEventListener('click', function() {
            const selectedClass = this.getAttribute('data-class');
            displayStudents(selectedClass);
            updateTimetable(selectedClass);
        });
    });

    document.getElementById('joinClassBtn').addEventListener('click', function() {
        alert('Joining the classroom... (This would redirect to a video conferencing room)');
        // Here you would typically redirect to the video conferencing URL.
    });

    // Mark notifications as read
    document.querySelectorAll('.mark-read').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none'; // Hide notification
        });
    });

    // Modal handling for Upload Materials
    const uploadModal = document.getElementById('uploadModal');
    const uploadMaterialsBtn = document.getElementById('uploadMaterialsBtn');
    const closeUploadModal = uploadModal.querySelector('.close');

    uploadMaterialsBtn.onclick = function() {
        uploadModal.style.display = "block";
    }

    closeUploadModal.onclick = function() {
        uploadModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === uploadModal) {
            uploadModal.style.display = "none";
        }
    }

    // Modal handling for Create Assignments
    const assignmentModal = document.getElementById('assignmentModal');
    const createAssignmentsBtn = document.getElementById('createAssignmentsBtn');
    const closeAssignmentModal = assignmentModal.querySelector('.close');

    createAssignmentsBtn.onclick = function() {
        assignmentModal.style.display = "block";
    }

    closeAssignmentModal.onclick = function() {
        assignmentModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === assignmentModal) {
            assignmentModal.style.display = "none";
        }
    }

    // Handle file uploads (to be implemented)
    document.getElementById('uploadForm').onsubmit = function(event) {
        event.preventDefault();
        const selectedClasses = Array.from(document.querySelectorAll('input[name=classes]:checked')).map(el => el.value);
        const files = document.getElementById('fileInput').files;

        // Process file upload logic here...
        console.log("Classes selected:", selectedClasses);
        console.log("Files selected:", files);

        // Close modal after processing
        uploadModal.style.display = "none";
    };

    // Handle assignment creation options (to be implemented)
    document.getElementById('manualAssignmentBtn').onclick = function() {
        alert("Manual assignment creation selected.");
        // Logic to handle manual assignment creation...
    };

    document.getElementById('aiAssignmentBtn').onclick = function() {
        alert("AI assignment creation selected.");
        // Logic to handle AI-based assignment creation...
    };

    document.querySelectorAll('.mark-read').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none'; // Hide notification
            // Optionally, you could also send an AJAX request to mark it as read in a database.
        });
    });

    function displayStudents(className) {
        const studentInfoDiv = document.getElementById('student-info');
        studentInfoDiv.innerHTML = `<h3>Students in ${className}</h3>`;

        if (studentData[className]) {
            const students = studentData[className];
            const studentList = students.map(student => `<p>${student.name} - Performance Grade ${student.performance}</p>`).join('');
            studentInfoDiv.innerHTML += studentList;
        } else {
            studentInfoDiv.innerHTML += `<p>No students found.</p>`;
        }
    }

    function updateTimetable(className) {
        const timetableBody = document.getElementById('timetable-body');
        // Here you can modify the timetable based on the selected class.
        // For simplicity, we will just show a message.
        timetableBody.innerHTML = `<tr><td colspan='6'>Showing timetable details for ${className}</td></tr>`;
        // You can replace this with actual timetable data related to the selected class.
    }

    // Mark notifications as read
    document.querySelectorAll('.mark-read').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none'; // Hide notification
            // Optionally, you could also send an AJAX request to mark it as read in a database.
        });
    });

    // Mark notifications as read
    document.querySelectorAll('.mark-read').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none'; // Hide notification
            // Optionally, you could also send an AJAX request to mark it as read in a database.
        });
    });

    // Handle sending messages in the chat
    document.getElementById('send-message').addEventListener('click', function() {
        const message = document.getElementById('chat-box').value;
        if (message.trim() !== "") {
            const chatHistory = document.getElementById('chat-history');
            const newMessage = document.createElement('p');
            newMessage.innerHTML = `<strong>You:</strong> ${message}`;
            chatHistory.appendChild(newMessage);
            document.getElementById('chat-box').value = ''; // Clear input
        }
    });

    // Mark notifications as read
    document.querySelectorAll('.mark-read').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.display = 'none'; // Hide notification
        });
    });

    // Handle manual assignment creation
    document.getElementById('manual-btn').addEventListener('click', function() {
        document.getElementById('manual-form').style.display = 'block';
        document.getElementById('ai-form').style.display = 'none';
    });

    document.getElementById('ai-btn').addEventListener('click', function() {
        document.getElementById('ai-form').style.display = 'block';
        document.getElementById('manual-form').style.display = 'none';
    });

    // Handle file uploads and assignment submissions (you can add AJAX requests here)
    document.getElementById('upload-assignment-btn').addEventListener('click', function() {
        alert('Assignment uploaded successfully!'); // Placeholder action
    });

    document.getElementById('create-ai-assignment-btn').addEventListener('click', function() {
        alert('AI assignment created successfully!'); // Placeholder action
    });

    // Show/hide forms based on button clicks
    document.getElementById('manual-btn').addEventListener('click', function() {
        document.getElementById('manual-form').style.display = 'block';
        document.getElementById('ai-form').style.display = 'none';
    });

    document.getElementById('ai-btn').addEventListener('click', function() {
        document.getElementById('ai-form').style.display = 'block';
        document.getElementById('manual-form').style.display = 'none';
    });

    // Handle manual assignment creation
    document.getElementById('upload-assignment-btn').addEventListener('click', function() {
        alert('Assignment uploaded successfully!'); // Placeholder action
    });

    // Handle AI assignment creation
    document.getElementById('create-ai-assignment-btn').addEventListener('click', function() {
        alert('AI assignment created successfully!'); // Placeholder action
    });

    // Show/hide forms based on button clicks
    document.getElementById('upload-pdf-btn').addEventListener('click', function() {
        document.getElementById('pdf-form').style.display = 'block';
        document.getElementById('manual-form').style.display = 'none';
    });

    document.getElementById('manual-input-btn').addEventListener('click', function() {
        document.getElementById('manual-form').style.display = 'block';
        document.getElementById('pdf-form').style.display = 'none';
    });

    // Handle PDF upload (placeholder functionality)
    document.getElementById('extract-questions-btn').addEventListener('click', function() {
        alert('Extracting questions from PDF...'); // Placeholder action
    });

    // Handle scheduling test (placeholder functionality)
    document.getElementById('schedule-test-btn').addEventListener('click', function() {
        alert('Test scheduled successfully!'); // Placeholder action
    });

    // script.js

    const chatInput =
        document.querySelector('.chat-input textarea');
    const sendChatBtn =
        document.querySelector('.chat-input button');
    const chatbox = document.querySelector(".chatbox");

    let userMessage;
    const API_KEY =
        "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";

    //OpenAI Free APIKey

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent =
            className === "chat-outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
        chatLi.innerHTML = chatContent;
        return chatLi;
    }

    const generateResponse = (incomingChatLi) => {
        const API_URL = "https://api.openai.com/v1/chat/completions";
        const messageElement = incomingChatLi
            .querySelector("p");
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [{
                    role: "user",
                    content: userMessage
                }]
            })
        };

        fetch(API_URL, requestOptions)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(data => {
                messageElement
                    .textContent = data.choices[0].message.content;
            })
            .catch((error) => {
                messageElement
                    .classList.add("error");
                messageElement
                    .textContent = "Oops! Something went wrong. Please try again!";
            })
            .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
    };


    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) {
            return;
        }
        chatbox
            .appendChild(createChatLi(userMessage, "chat-outgoing"));
        chatbox
            .scrollTo(0, chatbox.scrollHeight);

        setTimeout(() => {
            const incomingChatLi = createChatLi("Thinking...", "chat-incoming")
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            generateResponse(incomingChatLi);
        }, 600);
    }

    sendChatBtn.addEventListener("click", handleChat);

    function cancel() {
        let chatbotcomplete = document.querySelector(".chatBot");
        if (chatbotcomplete.style.display != 'none') {
            chatbotcomplete.style.display = "none";
            let lastMsg = document.createElement("p");
            lastMsg.textContent = 'Thanks for using our Chatbot!';
            lastMsg.classList.add('lastMessage');
            document.body.appendChild(lastMsg)
        }
    }

});