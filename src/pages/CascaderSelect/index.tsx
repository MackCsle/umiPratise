import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';
import cityData from './city';
import './index.less';
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
        <CascaderSelect
          dataSource={cityData}
          showSearch
          onChange={this.handleChange}
          canOnlyCheckLeaf
          multiple
        />
      </div>
    );
  }
}
export default Demo;
