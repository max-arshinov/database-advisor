export default function DbModels() {
    return <>
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
                <th>Availability</th>
                <th>Scalability</th>
                <th>Average Latency</th>
                <th>Average Throughput</th>
                <th>Suitable for write-heavy load</th>
                <th>Suitable for update-heavy load (by id)</th>
                <th>Suitable for bulk update-heavy load</th>
                <th>Suitable for read-heavy load (complex queries)</th>
                <th>Suitable for read-heavy load (by id)</th>
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
                        <li>ERP solutions</li>
                        <li>CRM platforms</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When data integrity is critical</li>
                        <li>Well-structured data with clear relationships</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For unstructured or large-scale distributed data</li>
                        <li>When flexible schema is needed</li>
                    </ul>
                </td>
                <td>Strong consistency (ACID)</td>
                <td>Moderate</td>
                <td>Vertical</td>
                <td>Moderate</td>
                <td>High</td>
                <td>No</td>
                <td>Yes</td>
                <td>Moderate</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Columnar Databases</td>
                <td>
                    <ul>
                        <li>Efficient for read-heavy analytical queries</li>
                        <li>Optimized for data compression</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Less suitable for transactional workloads</li>
                        <li>Slow for write-heavy operations</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Data warehousing</li>
                        <li>Business intelligence</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Analytical queries on large datasets</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Real-time transaction processing</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>High</td>
                <td>Moderate</td>
                <td>Low</td>
                <td>High</td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Moderate</td>
            </tr>
            <tr>
                <td>Wide-Column Databases</td>
                <td>
                    <ul>
                        <li>Highly scalable for big data</li>
                        <li>Schema flexibility</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Complex queries require effort</li>
                        <li>Not ideal for transactional data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>IoT data management</li>
                        <li>Time-series data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>For write-heavy workloads</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Complex joins</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>High</td>
                <td>Horizontal</td>
                <td>Low</td>
                <td>Very high</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Moderate</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Document Databases</td>
                <td>
                    <ul>
                        <li>Flexible schema</li>
                        <li>Good for hierarchical data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Less efficient for joins</li>
                        <li>Weaker ACID compliance</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Content management</li>
                        <li>Product catalogs</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Evolving data models</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Strict ACID compliance</li>
                    </ul>
                </td>
                <td>Eventual or strong consistency</td>
                <td>High</td>
                <td>Horizontal</td>
                <td>Moderate</td>
                <td>High</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Moderate</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Key/Value Databases</td>
                <td>
                    <ul>
                        <li>Very fast read and write</li>
                        <li>Simple data model</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Lacks complex query support</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Session management</li>
                        <li>Caching</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>When speed is critical</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Complex queries</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>High</td>
                <td>Horizontal</td>
                <td>Very low</td>
                <td>Very high</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Moderate</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Graph Databases</td>
                <td>
                    <ul>
                        <li>Optimized for relationships</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Complexity in large datasets</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Social networks</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Connected data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Simple queries</li>
                    </ul>
                </td>
                <td>Eventual or strong consistency</td>
                <td>Moderate</td>
                <td>Horizontal</td>
                <td>Low</td>
                <td>Moderate</td>
                <td>No</td>
                <td>Yes</td>
                <td>Low</td>
                <td>Yes</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Vector Databases</td>
                <td>
                    <ul>
                        <li>Efficient for similarity searches</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Limited traditional query support</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Machine learning</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>High-dimensional data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Relational data</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>High</td>
                <td>Horizontal</td>
                <td>Moderate</td>
                <td>High</td>
                <td>No</td>
                <td>Yes</td>
                <td>Moderate</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Event Databases</td>
                <td>
                    <ul>
                        <li>Real-time event handling</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Complex state management</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>IoT systems</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Streaming data</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Transactional data</li>
                    </ul>
                </td>
                <td>Eventual consistency</td>
                <td>High</td>
                <td>Horizontal</td>
                <td>Low</td>
                <td>Very high</td>
                <td>Yes</td>
                <td>No</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
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