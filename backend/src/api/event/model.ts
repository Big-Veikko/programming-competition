interface IOrganizer {
    name: string;
    email: string;
};

interface IAttendee {
    name: string;
    email: string;
}

export interface IEventRequest {
    subject: string;
    dtstart: string;
    dtend: string;
    all_day_event: boolean;
    description: string | null | undefined;
    location: string | null | undefined;
    type: string;
    organizer: IOrganizer;
    attendees: IAttendee[];
};

