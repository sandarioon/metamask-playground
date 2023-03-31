export interface IState {
    user: {
        wallet: string;
        balances: any[];
    },
    tokens: IToken[];
}

interface IToken {
    address: string;
    token: string;
    description: string;
}

export interface IBalance {
    amount: number;
    token: string;
    description: string;
}
