import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabPanel(props) {
  const { children, value, index } = props;

  return value === index && children;
}

const TabsC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabClassName = index => {
    return value === index ? `tab${index}` : `tab${index}-outline`;
  };

  return (
    <div className='tabs-c container'>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='simple tabs example'
      >
        <Tab label='Stats' className={getTabClassName(0)} />
        <Tab label='History' className={getTabClassName(1)} />
        <Tab label='Ranking' className={getTabClassName(2)} />
        <Tab label='Daily Tasks' className={getTabClassName(3)} />
        <Tab label='Referrals' className={getTabClassName(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item one
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </div>
  );
};

export default TabsC;
