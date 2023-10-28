interface IOrganizer {
    name: string;
    email: string;
};

export interface IAttendee {
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

export interface IEventResponse {
    id: string;
    day: string;
    month: string;
    location: string;
    type: string;
    subject: string;
    date: string;
  
  }

export interface IEvent {
    id:string,
    subject: string,
    dtstart: string,
    dtend: string,
    all_day_event: boolean,
    description: string,
    location: string,
    private: boolean,
    type: string,
    status: string,
    sequence: number,
    priority: number,
    dtstamp: string,
    transp: string,
    organizer: IOrganizer,
    attendees: IAttendee[]
}
