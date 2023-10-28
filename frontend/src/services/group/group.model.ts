export interface GroupModel {
    id: string;
    name: string;
    description: string;
    owner: string;
    members: object[];
    events: object[];
}

export interface GroupMemberModel {
    id: string;
    name: string;
    title: string;
    email_address: string;
    phone_number: string;
}