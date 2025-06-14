import { getFullDate } from "./helper";

export const job_sites = [
    {
        category: "Jobs",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            },
            {
                site_name: "Google",
                site_url: "https://google.com",
            },
            {
                site_name: "Google",
                site_url: "https://google.com",
            },
        ]
    },

    {
        category: "Courses",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            }
        ]
    },
    {
        category: "Courses",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            }
        ]
    },

    {
        category: "Courses",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            }
        ]
    }
]


export const useful_tools = [
    {
        category: "Jobs",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            },
            {
                site_name: "Google",
                site_url: "https://google.com",
            },
            {
                site_name: "Google",
                site_url: "https://google.com",
            },
        ]
    },

    {
        category: "Courses",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            }
        ]
    },
    {
        category: "Courses",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            }
        ]
    },

    {
        category: "Courses",
        external_links: [
            {
                site_name: "Google",
                site_url: "https://google.com",
            }
        ]
    }
]


export const user = {
    basic_info: {
        first_name: "    Jangiti     ",
        last_name: "", 
        desired_role: "SDE 1",
        city: "Hyderabad",
        country: "Telangana",
        about: "This is my about",
        get_full_name: function (){
            return this.first_name.concat(this.last_name).trim();
        },
        get_user_loc: function (){
            return this.city.concat(", ", this.country);
        },

    },
    skills: ["JS", "HTML", "React JS", "Software Engineering" , "JS", "HTML", "React JS", "Software Engineering", "JS", "HTML", "React JS", "Software Engineering"],
    educations: [
        {
            type:"Graduation", 
            university: "NIT Calicut",
            course: "Mechanical",
            degree:"BTech", 
            start_date: new Date("02-06-2021"),
            end_date:new Date("02-06-2025"),
            city: "Kerala",
            country: "India",
            get_loc: function (){
                return this.city.concat(" ",this.country);
            },
            get_date: function (){
                const sdy = String(this.start_date.getFullYear());
                let edy;
                if(!this.end_date){
                    edy = "Present"
                }else
                {
                    edy = String(this.end_date.getFullYear());
                }
                return sdy.concat(" - ", edy);
            }
        }
    ],
    contact_info: {
        email:"naveenjangiti@gmail.com",
        phone_number: "9110346500"
    },
    professional_connections: [
        {
            site_name: "Google",
            site_link: "https://www.google.com"
        },
        {
            site_name: "GoogleGooglGooglGoogleee",
            site_link: "https://www.google.com"
        },

        {
            site_name: "Google",
            site_link: "https://www.google.com"
        },
        {
            site_name: "Google",
            site_link: "https://www.google.com"
        },
        {
            site_name: "Google",
            site_link: "https://www.google.com"
        },
        {
            site_name: "GoogleGooglGooglGoogleee",
            site_link: "https://www.google.com"
        },

        {
            site_name: "Google",
            site_link: "https://www.google.com"
        },
        {
            site_name: "Google",
            site_link: "https://www.google.com"
        }

    ]


}


export const templates = [
    {
        template_id: 1,
        title: "Software Engineer",
        type: "Resume", 
        content: "This is the content in it",
        updated: new Date(),
        get_date: function (){
            let day = this.updated.getDate();
            let month = this.updated.getMonth();
            let year = this.updated.getFullYear();
            let date = "";
            [day, month, year].map((ele, i) => {
                if(ele < 10){
                    ele = "0"+String(ele);
                }
                date += String(ele);
                if(i < 2){
                    date += "-";
                }
            });
            return date;
        }
    },
    {
        template_id: 2,
        title: "Sde 2",
        type: "cover", 
        content: "This is the content in it",
        updated: new Date(),
        get_date: function (){
            return getFullDate(this.updated)
        }
    }

]


export const applications = [
    {
        application_id :1,
        company: "Google",
        role: "SDE 2",
        ctc_mentioned: "10LPA",
        job_type: "Full Time",
        job_location: "Banglore",
        job_portal: "Linked In",
        job_link: "www.google.com",
        applied_date: new Date(), 
        job_description: "This is JD",
        status: "Shortlisted" ,
        more_urls: [
        ],
        get_applied_date: function(){
            return getFullDate(this.applied_date)
        }
        
    }, 
    {
        application_id :2,
        company: "Google",
        company: "Microsoft",
        role: "SDE 3",
        ctc_mentioned: "20LPA",
        job_type: "Full Time",
        job_location: "Banglore",
        job_portal: "Linked In",
        job_link: "www.google.com",
        applied_date: new Date(), 
        job_description: "This is JD",
        status: "Round 2" ,
        more_urls: [
            {
                url_name: "Cocain",
                url: "google.com"
            },
            {
                url_name: "Assigment",
                url: "https://www.google.com"
            }
        ],
        get_applied_date: function(){
            return getFullDate(this.applied_date)
        }
    }
]