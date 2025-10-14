import React from "react";
import { Layout, Row, Col, Card, Image, Typography, Table, Form, Input, DatePicker, Select, Radio, Checkbox, Button } from "antd";
import "./index.css";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function App() {
  const [form] = Form.useForm();

 
  const tableData = [
    { key: '1', number: '1', combined: 'Объединённая ячейка', mergedColumn: 'Ячейка' },
    { key: '2', number: '2', column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: '3', number: '3', column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: '4', number: '4', column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: '5', number: '5', column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: '6', number: '6', column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: '7', number: '7', column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
    { key: '8', number: '8', column1: 'Ячейка', column2: 'Ячейка', mergedColumn: 'Ячейка' },
  ];

  const tableColumns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      rowScope: 'row',
      align: 'center',
    },
    {
      title: 'Заголовок объединённого блока',
      children: [
        {
          title: 'Колонка 1',
          dataIndex: 'column1',
          key: 'column1',
          align: 'center',
          render: (text, record) => record.combined ? { children: record.combined, props: { colSpan: 2 } } : text
        },
        {
          title: 'Колонка 2',
          dataIndex: 'column2',
          key: 'column2',
          align: 'center',
          render: (text, record) => record.combined ? { props: { colSpan: 0 } } : text
        },
      ],
    },
    {
      title: 'Объединённая колонка',
      dataIndex: 'mergedColumn',
      key: 'mergedColumn',
      align: 'center',
    },
  ];

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Layout className="app-layout">
      <Header className="site-header">
        <Row align="middle" justify="space-between" style={{ width: '100%' }}>
          <Col>
            <Row align="middle" gutter={16}>
              <Col>
                <Image
                  preview={false}
                  src="/img/KGU.png"
                  alt="Логотип КубГУ"
                  width={70}
                  height={70}
                  style={{ borderRadius: '4px' }}
                />
              </Col>
              <Col>
                <Title level={3} style={{ color: 'white', margin: 0 }}>Задание 4</Title>
              </Col>
            </Row>
            
          </Col>
          <Col>
            <nav>
              <Row gutter={[16, 0]}>
                <Col><a href="#links" style={{ color: 'white', fontWeight: 'bold' }}>Ссылки</a></Col>
                <Col><a href="#table" style={{ color: 'white', fontWeight: 'bold' }}>Таблица</a></Col>
                <Col><a href="#form" style={{ color: 'white', fontWeight: 'bold' }}>Форма</a></Col>
              </Row>
            </nav>
          </Col>
        </Row>
      </Header>

      <Content className="site-content" style={{ padding: '24px' }}>
        <section id="links" style={{ marginBottom: '24px' }}>
          <Card title="Ссылки" style={{ borderRadius: '8px' }}>
            <Row>
              <Col xs={24}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '12px' }}><a href="http://kubsu.ru/">КубГУ (http)</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="https://kubsu.ru/">КубГУ (https)</a></li>
                  <li style={{ marginBottom: '12px' }}>
                    <a href="https://kubsu.ru/">
                      <Image 
                        src="/img/image.jpg" 
                        alt="Картинка" 
                        width={150}
                        preview={false}
                        style={{ borderRadius: '4px' }}
                      />
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}><a href="Catalog/second-page.html">Сокращённая внутренняя</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="MainPage.html">Сокращённая главная</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="#form">Ссылка на фрагмент текущей страницы</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="https://www.kubsu.ru/ru/taxonomy/term/49?page=1&perpage=10&category=post">Ссылка с тремя параметрами</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="https://www.kubsu.ru/ru/taxonomy/term/49?id=#zone-footer-wrapper">Ссылка с параметром id</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="./MainPage.html">относительная ссылка в текущем каталоге</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="./about/about.html">относительная ссылка в каталоге about</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="./Catalog/third-page.html">На уровень выше</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="./Catalog/catalog2/fourth-page.html">На два уровня выше</a></li>
                  <li style={{ marginBottom: '12px' }}>В тексте <a href="https://kubsu.ru/">ссылка</a> внутри абзаца.</li>
                  <li style={{ marginBottom: '12px' }}><a href="https://example.com/page#section-id">Фрагмент стороннего сайта</a></li>
                  
                  
                  <li style={{ marginBottom: '12px' }}>
                    <map name="kartinka">
                      <area shape="rect" coords="35,35,350,190" href="https://kubsu.ru" alt="Сайт кубгу, прямоугольник" />
                      <area shape="circle" coords="180,375,125" href="https://kubsu.ru/index.php" alt="Сайт кубгу, круг" />
                    </map>
                    <Image 
                      src="/img/kartinka.jpg" 
                      useMap="#kartinka" 
                      alt="Картинка с областями" 
                      width={200}
                      preview={false}
                      style={{ borderRadius: '4px' }}
                    />
                  </li>

                  <li style={{ marginBottom: '12px' }}><a href="">Пустой href</a></li>
                  <li style={{ marginBottom: '12px' }}><a>Без href</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="https://kubsu.ru/" rel="nofollow">nofollow</a></li>
                  <li style={{ marginBottom: '12px' }}><a href="https://kubsu.ru/noindex.html" rel="noindex">noindex</a></li>

                
                  <li style={{ marginBottom: '12px' }}>
                    <ol>
                      <li><a href="http://kubsu.ru" title="Вот">Сайт КубГУ</a></li>
                      <li><a href="http://kubsu.ru" title="Сайт">Сайт КубГУ</a></li>
                      <li><a href="http://kubsu.ru" title="КубГУ">Сайт КубГУ</a></li>
                    </ol>
                  </li>

                  
                  <li style={{ marginBottom: '12px' }}>
                    <a href="ftp://username:password@ftp.example.com/path/to/file.txt">
                      Скачать файл
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Card>
        </section>

       
        <section id="table" style={{ marginBottom: '24px' }}>
          <Card title="Таблица данных" style={{ borderRadius: '8px' }}>
            <div style={{ overflowX: 'auto' }}>
              <Table 
                dataSource={tableData} 
                columns={tableColumns} 
                pagination={false}
                bordered
                size="middle"
              />
            </div>
          </Card>
        </section>

      
        <section id="form">
          <Card title="Форма" style={{ borderRadius: '8px' }}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark="optional"
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="ФИО"
                    name="fio"
                    rules={[{ required: true, message: 'Пожалуйста, введите ФИО' }]}
                  >
                    <Input placeholder="Введите ваше ФИО" />
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Телефон"
                    name="phone"
                    rules={[{ required: true, message: 'Пожалуйста, введите телефон' }]}
                  >
                    <Input placeholder="Введите ваш телефон" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Пожалуйста, введите email' },
                      { type: 'email', message: 'Введите корректный email' }
                    ]}
                  >
                    <Input placeholder="Введите ваш email" />
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Дата рождения"
                    name="bday"
                    rules={[{ required: true, message: 'когда родился' }]}
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    label="Пол"
                    name="gender"
                    rules={[{ required: true, message: 'Пожалуйста, выберите пол' }]}
                  >
                    <Radio.Group>
                      <Radio value="m">Мужской</Radio>
                      <Radio value="f">Женский</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    label="Любимый язык"
                    name="langs"
                    rules={[{ required: true, message: 'Пожалуйста, выберите язык' }]}
                  >
                    <Select mode="multiple" placeholder="Выберите языки программирования">
                      <Option value="Pascal">Pascal</Option>
                      <Option value="C">C</Option>
                      <Option value="C++">C++</Option>
                      <Option value="JavaScript">JavaScript</Option>
                      <Option value="PHP">PHP</Option>
                      <Option value="Python">Python</Option>
                      <Option value="Java">Java</Option>
                      <Option value="Haskell">Haskell</Option>
                      <Option value="Clojure">Clojure</Option>
                      <Option value="Prolog">Prolog</Option>
                      <Option value="Scala">Scala</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    label="Биография"
                    name="bio"
                    rules={[{ required: true, message: 'кто по жизни' }]}
                  >
                    <TextArea rows={4} placeholder="Расскажите о себе" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item
                    name="agree"
                    valuePropName="checked"
                    rules={[{ required: true, message: 'тыкни кнопку, мозги не делай' }]}
                  >
                    <Checkbox>С контрактом ознакомлен</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={16}>
                <Col xs={24}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" size="large">
                      Сохранить
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </section>
      </Content>

      <Footer style={{ textAlign: 'center', padding: '16px' }}>
        <Text>© Царенов Олег, 2025</Text>
      </Footer>
    </Layout>
  );
}