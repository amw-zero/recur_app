import React from 'react';
import { Budget as Client, Schedule } from "./generated-client";
import { makeAutoObservable } from 'mobx';

export const client = new Client((c: Client) => makeAutoObservable(c));
export const schedule = new Schedule((s: Schedule) => makeAutoObservable(s));

export const ClientContext = React.createContext({client, schedule});

export const useStore = () => React.useContext(ClientContext);
