

export const menu = {
    links: {
        public: [],
        private: [
            { label: 'Users', route: ['/users'] },
            { label: 'Daily', children: [
                { label: 'Transactions', route: ['/daily/trans']   },
                { label: 'Accounts'    , route: ['/daily/accs']    },
                { label: 'Categories'  , route: ['/daily/cats']    },
                { label: 'History'     , route: ['/daily/history'] }
            ]},
            { label: 'Bars', children: [
                { label: 'List', route: ['/bars'] },
                { label: 'Details', route: ['/bar/add'] },
            ]}
        ]
    },
    buttons: {
        unauthenticated: [
            { label: 'Sign in', route: ['/login'] , color: 'primary' },
            { label: 'Sign up', route: ['/signup'], color: 'success' }
        ],
        private: [
            { label: 'Invite', route: ['/invite'] , color: 'primary' },
        ]
    }
};