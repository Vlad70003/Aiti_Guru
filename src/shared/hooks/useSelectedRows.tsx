import React, {useState} from 'react';
import {TableRowSelection} from "antd/es/table/interface";
import {DataType} from "../../types";
import {CheckboxProps} from "antd";
import clsx from "clsx";
import {createStyles} from "antd-style";

const useStyles = createStyles(({ token, css }) => ({
    label: css`
    color: ${token.colorTextDisabled};
    font-weight: bold;
  `,

    iconChecked: css`
    background-color: #3C538E;
      border-color: #3C538E;
      &::after {
        display: none;
      }
  `,
    labelChecked: css`
    color: ${token.colorWarning};
  `,
}));

const useSelectedRows = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const { styles: classNamesStyles } = useStyles();

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const getCheckboxClassNames = (checked?: boolean): CheckboxProps["classNames"] => ({
        icon: clsx( checked && classNamesStyles.iconChecked),
        label: clsx(classNamesStyles.label, checked && classNamesStyles.labelChecked),
    });

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
        renderCell: (checked, _record, _index, originNode) => {
            if (!React.isValidElement(originNode)) return originNode;

            return React.cloneElement(
                originNode as React.ReactElement<CheckboxProps>,
                {
                    classNames: getCheckboxClassNames(checked),
                }
            );
        },
    };

    return {rowSelection}
};

export default useSelectedRows;