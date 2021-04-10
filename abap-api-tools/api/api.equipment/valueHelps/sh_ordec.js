// SH ORDEC Prod. Orders for Original Order (Trigger Point Function) : abap 2.2.0 at: 2021-04-10 21:53:58

const helpSign = [{ id: 'I', name: 'Include' }, { id: 'E', name: 'Exclude' }];
const helpOption = [
  { id: 'EQ', name: 'is' },
  { id: 'NE', name: 'is not' },
  { id: 'GT', name: 'greater than' },
  { id: 'LT', name: 'less than' },
  { id: 'GE', name: 'not less' },
  { id: 'LE', name: 'not greater' },
  { id: 'BT', name: 'between' },
  { id: 'NB', name: 'not between' },
  { id: 'CP', name: 'with pattern' },
  { id: 'NP', name: 'w/o pattern' }
];

const title = "Prod. Orders for Original Order (Trigger Point Function)";

const selectParams = [
  {
    FIELDNAME: "AUFNR",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "ANR"
  },
  {
    FIELDNAME: "KTEXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "AUTYP",
    DATATYPE: "NUMC",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PRODNET",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MAUFNR",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  }
];