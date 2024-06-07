import { Producer as TProducer } from "../api/producer/Producer";

export const PRODUCER_TITLE_FIELD = "name";

export const ProducerTitle = (record: TProducer): string => {
  return record.name?.toString() || String(record.id);
};
