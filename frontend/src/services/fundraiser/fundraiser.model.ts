export interface FundraiserModel {
    id: string;
    event_id: string;
    target: number;
    raised: number;
    cause: string;
    approval_status: string;
    target_status: string;
}