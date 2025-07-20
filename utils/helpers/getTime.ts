import moment from 'moment';


export function getTimeFromNow(date: string) {
    return moment(date).fromNow()
}