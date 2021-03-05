import React from 'react'
import PhotosContent from './PhotosContent'
import style from './modules/Photos.module.css'

import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
  }

export default function Photos() {
    return(
        <div className={style.tabs}>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="New" key="1">
                        <PhotosContent value="New"/>
                    </TabPane>
                    <TabPane tab="Popular" key="2">
                        <PhotosContent value="Popular"/>
                    </TabPane>
                </Tabs>
        </div>
    )
}