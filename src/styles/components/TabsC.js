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

  return (
    <div className='tabs-c'>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='simple tabs example'
      >
        <Tab label='Item One' className={`tab1`} />
        <Tab label='Item Two' className={`tab2`} />
        <Tab label='Item Three' className={`tab3`} />
        <Tab label='Item Four' className={`tab4`} />
        <Tab label='Item Five' className={`tab5`} />
      </Tabs>
      <TabPanel value={value} index={0}>
        h1
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
