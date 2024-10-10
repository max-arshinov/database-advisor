export default function DbModels() {
    return <>
        <h1>DB Models</h1>
        <table>
            <thead>
            <tr>
                <th>DB Model</th>
                <th>Pros</th>
                <th>Cons</th>
                <th>Use Cases</th>
                <th>When to use</th>
                <th>When not to use</th>
                <th>Consistency Models</th>
                <th>Scalability</th>
                <th>Suitable for write-heavy load</th>
                <th>Suitable for read-heavy load (complex queries)</th>
                <th>Average Latency</th>
                <th>Average Throughput</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Relational Databases</td>
                <td>
                    <ul>
                        <li>Strong support for ACID transactions</li>
                        <li>Excellent for structured data and relationships</li>
                        <li>Powerful query language (SQL) for complex queries</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Limited scalability for large distributed datasets</li>
                        <li>Rigid schema can be difficult to modify</li>
                        <li>Can be resource-intensive for complex queries</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Financial systems</li>
                        <li>ERP (Enterprise Resource Planning) solutions</li>
                        <li>CRM (Customer Relationship Management) platforms</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When data integrity and consistency are critical</li>
                        <li>For well-structured data with clear relationships</li>
                        <li>In applications with complex query requirements</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When handling large-scale, unstructured data</li>
                        <li>When flexible schema or rapid data changes are needed</li>
                        <li>For horizontal scaling across multiple nodes</li>
                    </ul>
                </td>
                <td>Strong consistency (ACID)</td>
                <td>Vertical scalability (limited horizontal scalability)</td>
                <td>No</td>
                <td>Yes</td>
                <td>Moderate</td>
                <td>High for read-heavy operations</td>
            </tr>
            <tr>
                <td>Document Databases</td>
                <td>
                    <ul>
                        <li>Flexible schema, ideal for evolving data models</li>
                        <li>High performance for read-heavy operations</li>
                        <li>Great for hierarchical or nested data structures</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Less efficient for complex relationships and joins</li>
                        <li>Weaker ACID compliance compared to relational databases</li>
                        <li>Can lead to data duplication and inconsistencies</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Content management systems</li>
                        <li>Product catalogs</li>
                        <li>Blog platforms</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For applications with evolving or semi-structured data</li>
                        <li>When using JSON-like data representation</li>
                        <li>In web applications requiring flexible data handling</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When strict data integrity and ACID compliance are required</li>
                        <li>For highly interrelated data that needs frequent joins</li>
                    </ul>
                </td>
                <td>Eventual or strong consistency (depending on configuration)</td>
                <td>High horizontal scalability</td>
                <td>Moderate</td>
                <td>Yes</td>
                <td>Low</td>
                <td>High</td>
            </tr>
            <tr>
                <td>Graph Databases</td>
                <td>
                    <ul>
                        <li>Optimized for complex relationships and graph queries</li>
                        <li>Highly intuitive data modeling with nodes and edges</li>
                        <li>Excellent for traversing connections in large datasets</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Not suited for large-scale analytical queries</li>
                        <li>Higher complexity in managing graph structures</li>
                        <li>Can be overkill for simple data models</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Social networks</li>
                        <li>Recommendation engines</li>
                        <li>Fraud detection systems</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When working with highly connected data</li>
                        <li>For scenarios requiring fast traversal of relationships</li>
                        <li>In applications with dynamic and interlinked data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For flat, tabular data or simple query requirements</li>
                        <li>When handling large volumes of unconnected data</li>
                    </ul>
                </td>
                <td>Eventual or strong consistency (based on configuration)</td>
                <td>Horizontal scalability</td>
                <td>No</td>
                <td>Yes</td>
                <td>Low</td>
                <td>Moderate</td>
            </tr>
            <tr>
                <td>Key-Value Databases</td>
                <td>
                    <ul>
                        <li>Extremely fast read and write operations</li>
                        <li>Simple and easy-to-understand data model</li>
                        <li>Great for caching and session storage</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Lacks support for complex queries and relationships</li>
                        <li>Limited functionality beyond simple key-value pairs</li>
                        <li>Data retrieval is not flexible</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Session management</li>
                        <li>Real-time data caching</li>
                        <li>Configuration management</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When speed is critical, like caching and real-time data</li>
                        <li>For simple lookup scenarios with fixed keys</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When complex querying or joins are needed</li>
                        <li>For applications requiring data relationships</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>High horizontal scalability</td>
                <td>Yes</td>
                <td>No</td>
                <td>Very low</td>
                <td>Very high</td>
            </tr>
            <tr>
                <td>Vector Databases</td>
                <td>
                    <ul>
                        <li>Specialized for high-dimensional data handling</li>
                        <li>Efficient for similarity searches and machine learning</li>
                        <li>Supports complex AI/ML operations like nearest neighbor search</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Limited support for traditional queries and data operations</li>
                        <li>Not ideal for relational or structured data tasks</li>
                        <li>Requires specific AI/ML knowledge to set up and optimize</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Recommendation systems</li>
                        <li>Image and text similarity search</li>
                        <li>Natural language processing (NLP) applications</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For tasks involving similarity search in high-dimensional data</li>
                        <li>When working with AI/ML model vector outputs</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When handling standard relational data</li>
                        <li>For applications requiring complex joins or transactional operations</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>Moderate scalability</td>
                <td>No</td>
                <td>Yes</td>
                <td>Moderate</td>
                <td>High</td>
            </tr>
            <tr>
                <td>Wide-Column Databases</td>
                <td>
                    <ul>
                        <li>Highly scalable for big data applications</li>
                        <li>Efficient storage and retrieval of sparse data</li>
                        <li>Schema flexibility with dynamic columns</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Complex queries require more effort compared to relational databases</li>
                        <li>Data modeling can be challenging for highly interconnected data</li>
                        <li>Not ideal for transactional data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Time-series data</li>
                        <li>IoT data management</li>
                        <li>Analytics on large-scale datasets</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For write-heavy workloads with high scalability requirements</li>
                        <li>When dealing with semi-structured data that can vary between records</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For applications that require complex joins and relational data</li>
                        <li>When strict ACID compliance is necessary</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>High horizontal scalability</td>
                <td>Yes</td>
                <td>No</td>
                <td>Low</td>
                <td>Very high</td>
            </tr>
            <tr>
                <td>Columnar Databases</td>
                <td>
                    <ul>
                        <li>Highly efficient for read-heavy analytical queries</li>
                        <li>Optimized for data compression and faster query performance</li>
                        <li>Excellent for aggregating and scanning large datasets</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Not suitable for transactional workloads</li>
                        <li>Less efficient for write-heavy operations</li>
                        <li>Complex queries requiring multiple row operations can be slower</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Data warehousing</li>
                        <li>Business intelligence (BI) and reporting</li>
                        <li>Analytical processing (OLAP) workloads</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When performing analytical queries on large datasets</li>
                        <li>For scenarios that require high-speed data aggregation</li>
                        <li>In business intelligence and data warehousing environments</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For real-time transaction processing (OLTP)</li>
                        <li>When frequent, individual row-level updates are required</li>
                        <li>In applications with high write-to-read ratios</li>
                    </ul>
                </td>
                <td>Strong consistency (ACID-like properties in some cases)</td>
                <td>Moderate scalability (usually vertical)</td>
                <td>No</td>
                <td>Yes</td>
                <td>Low</td>
                <td>High</td>
            </tr>
            </tbody>
        </table>
    </>;
}


function Tmp() {
    return (<>
            <div>
                <h2>Wide-column</h2>
                Wide-column databases are ideal for use cases that require a large dataset that can be distributed
                across
                multiple database nodes, especially when the columns are not always the same for every row.

                <ul>
                    <li>Log data</li>
                    <li>IoT (Internet of Things) sensor data</li>
                    <li>Time-series data, such as temperature monitoring or financial trading data</li>
                    <li>Attribute-based data, such as user preferences or equipment features</li>
                    <li>Real-time analytics</li>
                </ul>
            </div>

            <div>
                <h2>Graph</h2>
                Graph databases have advantages for use cases such as social networking, recommendation engines, and
                fraud
                detection when used to create relationships between data and quickly query these relationships.
            </div>

            <div>
                <h2>Vector</h2>
                A vector database is a collection of data stored as mathematical representations. Vector databases make
                it
                easier for machine learning models to remember previous inputs, allowing machine learning to be used to
                power search, recommendations, and text generation use-cases. Data can be identified based on similarity
                metrics instead of exact matches, making it possible for a computer model to understand data
                contextually.

                To summarize, vector databases make it possible for computer programs to draw comparisons, identify
                relationships, and understand context. This enables the creation of advanced artificial intelligence
                (AI)
                programs like large language models (LLMs).
            </div>

            <div>

            </div>
        </>
    );
}