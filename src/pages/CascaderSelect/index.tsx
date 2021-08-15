import { CascaderSelect, Select } from '@alifd/next';
import 'whatwg-fetch';
import cityData from './city';
const { Option, OptionGroup } = Select;
import './index.less';

const dataSource = [
  {
    label: 'label1',
    children: [
      {
        label: 'label1-1',
        value: 'text1-1',
      },
    ],
  },
  {
    label: 'label2',
    children: [
      {
        label: 'label2-1',
        value: 'text2-1',
      },
    ],
  },
];
class Demo extends React.Component {
  handleChange: (value: any, data: any, extra: any) => void;
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.handleChange = (value, data, extra) => {
      console.log(value, data, extra);
    };
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    //   fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json")
    //     .then(response => response.json())
    //     .then(data => {
    //       this.setState({ data });
    //     })
    //     .catch(e => console.log(e));
    cityData.forEach(
      (province: { lable: any; provinceName: any; value: any }) => {
        province.label = province.provinceName;
        province.value = province.provinceCode;
        province.children = province.mallCityList;
        province.level = 1;
        province.children.forEach(
          (city: {
            label: any;
            cityName: any;
            value: any;
            children: any;
            mallAreaList: {
              label: any;
              areaName: any;
              value: any;
              areaCode: any;
            }[];
          }) => {
            city.label = city.cityName;
            city.value = city.cityCode;
            city.level = 2;
            city.children = city.mallAreaList;
            city.children.forEach(
              (area: {
                label: any;
                areaName: any;
                value: any;
                areaCode: any;
              }) => {
                area.label = area.areaName;
                area.value = area.areaCode;
                area.level = 3;
              },
            );
          },
        );
      },
    );
  }

  render() {
    return (
      <div className="select-content">
        {/* 城市联机选择 */}
        <CascaderSelect
          dataSource={cityData}
          showSearch
          onChange={this.handleChange}
          canOnlyCheckLeaf
          multiple
        />
        {/* select分组 */}
        <Select placeholder="OptionGroup" style={{ marginRight: 8 }}>
          <OptionGroup label="group1">
            <Option value="small">Small</Option>
            <Option value="medium">Medium</Option>
            <Option value="large">Large</Option>
          </OptionGroup>
          <OptionGroup label="group2">
            <Option value="small2">Small2</Option>
            <Option value="medium2">Medium2</Option>
            <Option value="large2">Large2</Option>
          </OptionGroup>
        </Select>
        <Select placeholder="use dataSource" dataSource={dataSource} />
      </div>
    );
  }
}
export default Demo;
