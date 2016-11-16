// Type definitions for bootstrap-datepicker
// Project: https://github.com/eternicode/bootstrap-datepicker
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery"/>

/**
 * All options that take a “Date” can handle a Date object; a String
 * formatted according to the given format; or a timedelta relative
 * to today, eg “-1d”, “+6m +1y”, etc, where valid units are “d” (day),
 * “w” (week), “m” (month), and “y” (year).
 * 
 * See online docs for more info:
 *  https://bootstrap-datepicker.readthedocs.io/en/latest/options.html
 */
interface DatepickerOptions {
    format?: string | DatepickerCustomFormatOptions;
    weekStart?: number;
    startDate?: any;
    endDate?: any;
    autoclose?: boolean;
    startView?: number;
    todayBtn?: any;
    todayHighlight?: boolean;
    keyboardNavigation?: boolean;
    language?: string;
    beforeShowDay?: (date: any) => any;
    calendarWeeks?: boolean;
    clearBtn?: boolean;
    daysOfWeekDisabled?: number[];
    forceParse?: boolean;
    inputs?: any[];
    minViewMode?: any;
    multidate?: any;
    multidateSeparator?: string;
    orientation?: string;
    assumeNearbyYear?: any;
    viewMode?: string;
    templates?: any;
    zIndexOffset?: number;
    showOnFocus?: boolean;
    immediateUpdates?: boolean;
    title?: string;
}

interface DatepickerCustomFormatOptions {
    toDisplay?(date: string, format: any, language: any): string;
    toValue?(date: string, format: any, language: any): Date;
}

interface DatepickerEventObject extends JQueryEventObject {
    date: Date;
    format(format?: string): string;
}

interface JQuery {
    datepicker(): JQuery;
    datepicker(methodName: string): any;
    datepicker(methodName: string, params: any): any;
    datepicker(options: DatepickerOptions): JQuery;

    off(events: "changeDate", selector?: string, handler?: (eventObject: DatepickerEventObject) => any): JQuery;
    off(events: "changeDate", handler: (eventObject: DatepickerEventObject) => any): JQuery;

    on(events: "changeDate", selector: string, data: any, handler?: (eventObject: DatepickerEventObject) => any): JQuery;
    on(events: "changeDate", selector: string, handler: (eventObject: DatepickerEventObject) => any): JQuery;
    on(events: 'changeDate', handler: (eventObject: DatepickerEventObject) => any): JQuery;
}
