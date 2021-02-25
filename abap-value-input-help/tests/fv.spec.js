// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const ValueInputHelp = require("../dist").ValueInputHelp;
const setup = require("./setup");

("use strict");

let VI;
beforeAll(async () => {
  const vi = await ValueInputHelp.new(setup.client, setup.shlpApi);
  return (VI = vi);
});

describe("FV Helps", () => {
  test("FV RET_TYPE", async () => {
    expect.assertions(1);

    const R = await VI.getDomainValues("RET_TYPE");
    expect(R).toEqual([
      {
        DOMNAME: "RET_TYPE",
        VALPOS: "0001",
        DDLANGUAGE: "E",
        DOMVALUE_L: "",
        DOMVALUE_H: "",
        DDTEXT: "Not Applicable",
        DOMVAL_LD: "",
        DOMVAL_HD: "",
        APPVAL: "",
      },
      {
        DOMNAME: "RET_TYPE",
        VALPOS: "0002",
        DDLANGUAGE: "E",
        DOMVALUE_L: "H",
        DOMVALUE_H: "",
        DDTEXT: "Applicable (Header Level)",
        DOMVAL_LD: "",
        DOMVAL_HD: "",
        APPVAL: "",
      },
      {
        DOMNAME: "RET_TYPE",
        VALPOS: "0003",
        DDLANGUAGE: "E",
        DOMVALUE_L: "I",
        DOMVALUE_H: "",
        DDTEXT: "Applicable (Item Level)",
        DOMVAL_LD: "",
        DOMVAL_HD: "",
        APPVAL: "",
      },
      {
        DOMNAME: "RET_TYPE",
        VALPOS: "0004",
        DDLANGUAGE: "E",
        DOMVALUE_L: "B",
        DOMVALUE_H: "",
        DDTEXT: "Secured by Bond",
        DOMVAL_LD: "",
        DOMVAL_HD: "",
        APPVAL: "",
      },
    ]);
  });

  test("FV MM_MEMORYTYPE", async () => {
    expect.assertions(1);

    const R = await VI.getDomainValues("MM_MEMORYTYPE");
    expect(R).toEqual([
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Document Saved as Complete",
        DOMNAME: "MM_MEMORYTYPE",
        DOMVALUE_H: "",
        DOMVALUE_L: "",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0001",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Document Parked",
        DOMNAME: "MM_MEMORYTYPE",
        DOMVALUE_H: "",
        DOMVALUE_L: "P",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0002",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Document on Hold",
        DOMNAME: "MM_MEMORYTYPE",
        DOMVALUE_H: "",
        DOMVALUE_L: "H",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0003",
      },
    ]);
  });

  test("FV ESTAK", async () => {
    expect.assertions(1);

    const R = await VI.getDomainValues("ESTAK");
    expect(R).toEqual([
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "RFQ with Quotation",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "A",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0001",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from Automatic Conversion of Requisitions",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "B",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0002",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from Goods Receipt",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "C",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0003",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from Data Transfer",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "D",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0004",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from Allocation Table",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "E",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0005",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from Kanban",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "F",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0006",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from Store Order",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "G",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0007",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from DRP",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "H",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0008",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from BAPI",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "I",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0009",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from ALE Scenario",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "J",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0010",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Scheduling Agreement from CRM",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "L",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0011",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Collective Purchase Order",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "S",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0012",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order Created via Function Module",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "X",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0013",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from APO",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "1",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0014",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Enjoy Purchase Order",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "9",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0015",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from BBP",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "K",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0016",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Third-Party Order from CRM",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "2",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0017",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Returns Order from Incorrect Delivery",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "3",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0018",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchasing Document from E-Sourcing",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "M",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0019",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Subsequent Stock Transport Order for Additional Item",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "4",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0020",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Incorrect Item Returns from Stock Transport Orders",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "5",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0021",
      },
      {
        APPVAL: "",
        DDLANGUAGE: "E",
        DDTEXT: "Purchase Order from Transportation Management",
        DOMNAME: "ESTAK",
        DOMVALUE_H: "",
        DOMVALUE_L: "T",
        DOMVAL_HD: "",
        DOMVAL_LD: "",
        VALPOS: "0022",
      },
    ]);
  });
});
