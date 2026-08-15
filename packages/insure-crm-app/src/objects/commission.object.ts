import { defineObject, FieldType } from 'twenty-sdk/define';
import {
  COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER,
  COMMISSION_COMMISSION_NUMBER_FIELD_UNIVERSAL_IDENTIFIER,
} from '../constants/universal-identifiers';

export const COMMISSION_OBJECT_ID = COMMISSION_OBJECT_UNIVERSAL_IDENTIFIER;
export const COMMISSION_NAME_FIELD_ID = COMMISSION_COMMISSION_NUMBER_FIELD_UNIVERSAL_IDENTIFIER;


export default defineObject({
  universalIdentifier: COMMISSION_OBJECT_ID,
  nameSingular: 'commission',
  namePlural: 'commissions',
  labelSingular: 'Commission',
  labelPlural: 'Commissions',
  description: 'Commission record',
  icon: 'IconMoneybag',
  labelIdentifierFieldMetadataUniversalIdentifier: COMMISSION_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: COMMISSION_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'statementReference',
      label: 'Statement Reference',
      description: 'Statement Reference',
      icon: 'IconTextCaption',
      isLabelIdentifier: true,
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a2',
      type: FieldType.SELECT,
      name: 'commissionType',
      label: 'Commission Type',
      description: 'Type of commission',
      icon: 'IconCategory',
      options: [
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a0', value: 'FIRST_YEAR', label: 'First Year', color: 'blue', position: 0 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a1', value: 'RENEWAL', label: 'Renewal', color: 'green', position: 1 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a2', value: 'OVERRIDE', label: 'Override', color: 'purple', position: 2 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a3', value: 'BONUS', label: 'Bonus', color: 'yellow', position: 3 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a4', value: 'CLAWBACK', label: 'Clawback', color: 'red', position: 4 },
      ]
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a3',
      type: FieldType.NUMBER,
      name: 'policyYear',
      label: 'Policy Year',
      description: 'Policy Year',
      icon: 'IconNumber',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a4',
      type: FieldType.CURRENCY,
      name: 'expectedAmount',
      label: 'Expected Amount',
      description: 'Expected Amount',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a5',
      type: FieldType.CURRENCY,
      name: 'receivedAmount',
      label: 'Received Amount',
      description: 'Received Amount',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a6',
      type: FieldType.CURRENCY,
      name: 'variance',
      label: 'Variance',
      description: 'Variance',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a7',
      type: FieldType.SELECT,
      name: 'varianceStatus',
      label: 'Variance Status',
      description: 'Variance Status',
      icon: 'IconList',
      defaultValue: "'PENDING'",
      options: [
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a5', value: 'MATCH', label: 'Match', color: 'green', position: 0 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a6', value: 'SHORTFALL', label: 'Shortfall', color: 'red', position: 1 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a7', value: 'EXCESS', label: 'Excess', color: 'orange', position: 2 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a8', value: 'PENDING', label: 'Pending', color: 'gray', position: 3 },
      ]
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a8',
      type: FieldType.NUMBER,
      name: 'commissionRate',
      label: 'Commission Rate',
      description: 'Commission Rate',
      icon: 'IconPercentage',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a9',
      type: FieldType.CURRENCY,
      name: 'premiumBase',
      label: 'Premium Base',
      description: 'Premium Base',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b0',
      type: FieldType.DATE_TIME,
      name: 'expectedPaymentDate',
      label: 'Expected Payment Date',
      description: 'Expected Payment Date',
      icon: 'IconCalendarEvent',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b1',
      type: FieldType.DATE_TIME,
      name: 'paymentDate',
      label: 'Payment Date',
      description: 'Payment Date',
      icon: 'IconCalendarEvent',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b2',
      type: FieldType.CURRENCY,
      name: 'tdsAmount',
      label: 'TDS Amount',
      description: 'TDS Amount',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b3',
      type: FieldType.CURRENCY,
      name: 'gstOnCommission',
      label: 'GST On Commission',
      description: 'GST On Commission',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b4',
      type: FieldType.CURRENCY,
      name: 'netAmount',
      label: 'Net Amount',
      description: 'Net Amount',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b5',
      type: FieldType.CURRENCY,
      name: 'subAgentShare',
      label: 'Sub Agent Share',
      description: 'Sub Agent Share',
      icon: 'IconCurrencyDollar',
    },
    {
      universalIdentifier: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02b6',
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      description: 'Status',
      icon: 'IconStatusChange',
      defaultValue: "'EXPECTED'",
      options: [
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02a9', value: 'EXPECTED', label: 'Expected', color: 'gray', position: 0 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02aa', value: 'RECEIVED', label: 'Received', color: 'green', position: 1 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02ab', value: 'PARTIALLY_RECEIVED', label: 'Partially Received', color: 'orange', position: 2 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02ac', value: 'DISPUTED', label: 'Disputed', color: 'red', position: 3 },
        { id: '3f9b2d8e-7e9a-4e2b-81d3-6490333d02ad', value: 'WRITTEN_OFF', label: 'Written Off', color: 'purple', position: 4 },
      ]
    }
  ]
});
