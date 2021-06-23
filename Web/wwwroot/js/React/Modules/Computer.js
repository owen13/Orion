import {Input, Select} from './Modules/Controls'

export class Computer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let computer = this.props.computer;

        return (
            <tr key={computer.Id}>
                <td>{computer.Id}</td>
                <td>
                {
                    (this.props.editState.status === true && this.props.editState.rowKey === computer.Id) ? (
                        <div>
                            <Select key={'Ram' + computer.Id} computer={computer} id={computer.Id} items={this.props.lists.Rams} value={computer.RamId} propertyId={'RamId'} propertyStringName={'RamDescription'} listName={'Rams'} selectChange={this.props.selectChange} />
                        </div>
                    ) : (
                        <div>{computer.RamDescription}</div>
                    )
                }
                </td>
                <td className={'graphicsCardColumn'}>
                    {
                        (this.props.editState.status === true && this.props.editState.rowKey === computer.Id) ? (
                            <div>
                                <Select key={'GraphicsCards' + computer.Id} computer={computer} id={computer.Id} items={this.props.lists.GraphicsCards} value={computer.GraphicsCardId} propertyId={'GraphicsCardId'} propertyStringName={'GraphicsCardDescription'} listName={'GraphicsCards'} selectChange={this.props.selectChange} />
                            </div>
                        ) : (
                            <div>{computer.GraphicsCardDescription}</div>
                        )
                    }
                </td>
                <td className={'hardDriveColumn'}>
                    {
                        (this.props.editState.status === true && this.props.editState.rowKey === computer.Id) ? (
                            <div>
                                <Select key={'HardDrives' + computer.Id} computer={computer} id={computer.Id} items={this.props.lists.HardDrives} value={computer.HardDriveId} propertyId={'HardDriveId'} propertyStringName={'HardDriveDescription'} listName={'HardDrives'} selectChange={this.props.selectChange} />
                            </div>
                        ) : (
                            <div>{computer.HardDriveDescription}</div>
                        )
                    }
                </td>
                <td className={'usbColumn'}>
                    {
                        <span>
                            {
                                (this.props.editState.status === true && this.props.editState.rowKey === computer.Id) ? (
                                    <div>
                                        <div>
                                        USB-2:&nbsp;
                                        <Select computer={computer}
                                                id={computer.Id} items={this.props.lists.UsbsOfEachType}
                                                value={computer.UsbCounts.Usb2}
                                                propertyId={'Usb2'}
                                                selectChange={this.props.selectChange}/>
                                        </div>
                                        
                                        <div>
                                        USB-3:&nbsp;
                                        <Select computer={computer}
                                                id={computer.Id} items={this.props.lists.UsbsOfEachType}
                                                value={computer.UsbCounts.Usb3}
                                                propertyId={'Usb3'}
                                                selectChange={this.props.selectChange}/>
                                        </div>

                                        <div>
                                            USB-C:&nbsp;
                                            <Select computer={computer}
                                                    id={computer.Id} items={this.props.lists.UsbsOfEachType}
                                                    value={computer.UsbCounts.UsbC}
                                                    propertyId={'UsbC'}
                                                    selectChange={this.props.selectChange}/>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <span>USB-2: {computer.UsbCounts.Usb2}&nbsp;</span>
                                        <span>USB-3: {computer.UsbCounts.Usb3}&nbsp;</span>
                                        <span>USB-C: {computer.UsbCounts.UsbC}&nbsp;</span>
                                    </div>
                                )
                            }
                        </span>
                    }
                </td>
                <td>
                    {
                        (this.props.editState.status === true && this.props.editState.rowKey === computer.Id) ? (
                            <div>
                                <Input key={'PSU' + computer.Id} id={computer.Id} value={computer.Psu} propertyId={'Psu'} inputChange={this.props.inputChange} />
                            </div>
                        ) : (
                            <div>{computer.Psu}</div>
                        )
                    }
                </td>
                <td className={'weightColumn'}>
                    {
                        (this.props.editState.status === true && this.props.editState.rowKey === computer.Id) ? (
                            <div>
                                <Input key={'WeightQuantity' + computer.Id} id={computer.Id} value={computer.WeightQuantity} propertyId={'WeightQuantity'} inputChange={this.props.inputChange} />
                                <Select key={'Computer' + computer.Id} computer={computer} id={computer.Id} items={this.props.lists.WeightUnits} value={computer.WeightUnitId} propertyId={'WeightUnitId'} propertyStringName={'WeightUnitDescription'} listName={'WeightUnits'} selectChange={this.props.selectChange} />
                            </div>
                        ) : (
                            <div>{computer.WeightQuantity} {computer.WeightUnitDescription}</div>
                        )
                    }
                </td>
                <td>
                    {
                        (this.props.editState.status === true && this.props.editState.rowKey === computer.Id) ? (
                            <div>
                                <Select key={'Processor' + computer.Id} computer={computer} id={computer.Id} items={this.props.lists.Processors} value={computer.ProcessorId} propertyId={'ProcessorId'} propertyStringName={'ProcessorDescription'} listName={'Processors'} selectChange={this.props.selectChange} />
                            </div>
                        ) : (
                            <div>{computer.ProcessorDescription}</div>
                        )
                    }
                </td>
                
                <td className={'actionsColumn'}>
                    <button type="button" className="editButton btn btn-primary" onClick={() => this.props.onEdit(computer.Id)}>EDIT</button>
                    <button type="button" className="btn btn-primary" onClick={() => this.props.onUpdate(computer)}>SAVE</button>
                </td>
            </tr>
        )
    }
}