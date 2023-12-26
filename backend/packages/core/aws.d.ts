import "sst/node/table";
import { Table } from 'sst/constructs'

declare module "sst/node/table" {
  export interface TableResources {
    "Notes": Table
  }
}
