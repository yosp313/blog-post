import { Database } from '../utils/database.types';
import { Database as DB } from "@/utils/database.types";

declare global{
    type Database = DB
}