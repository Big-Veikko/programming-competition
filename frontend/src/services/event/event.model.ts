export interface EventModel {
    id: number;
    subject: string;
    dtstart: string;
    dtend: string;
    all_day_event: boolean;
    description: string;
    location: string;
    private: boolean;
    type: string;
    status: string;
    sequence: number;
    priority: number;
    dtstamp: string;
    transp: string;
    organizer: object;
    attendees: object[]
}