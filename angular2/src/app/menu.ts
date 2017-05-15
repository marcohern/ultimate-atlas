

export const menu = {
    links: {
        public: [],
        private: [
            { label:'Users', route:['/users'] },
            { label:'Daily', children: [
                { label:'Transactions', route:['/daily/trans']   },
                { label:'Categories'  , route:['/daily/cats']    },
                { label:'History'     , route:['/daily/history'] }
            ]}
        ]
    },
    buttons: {
        unauthenticated: [
            { label:'Sign in', route:['/login'] , color:'primary' },
            { label:'Sign up', route:['/signup'], color:'success' }
        ],
        private: [
            { label:'Invite', route:['/invite'] , color:'primary' },
        ]
    }
};