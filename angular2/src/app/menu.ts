

export const menu = {
    links: {
        public: [],
        private: [
            { label:'Users', route:['/users'] },
            { label:'Daily', route:['/daily/trans'] }
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