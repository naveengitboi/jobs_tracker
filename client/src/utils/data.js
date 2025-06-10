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


